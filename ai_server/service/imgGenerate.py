import functools
import json
from diffusers import StableDiffusionXLPipeline, StableDiffusionXLImg2ImgPipeline
import torch
import os
from compel import Compel, ReturnedEmbeddingsType
from PIL import Image

from Dto import BouquetUrlTransferDto
from service.publish import publish
from service.upload import upload

def latents_to_rgb(latents):
    weights = (
        (60, -60, 25, -70),
        (60,  -5, 15, -50),
        (60,  10, -5, -35)
    )

    weights_tensor = torch.t(torch.tensor(weights, dtype=latents.dtype).to(latents.device))
    biases_tensor = torch.tensor((150, 140, 130), dtype=latents.dtype).to(latents.device)
    rgb_tensor = torch.einsum("...lxy,lr -> ...rxy", latents, weights_tensor) + biases_tensor.unsqueeze(-1).unsqueeze(-1)
    image_array = rgb_tensor.clamp(0, 255)[0].byte().cpu().numpy()
    image_array = image_array.transpose(1, 2, 0)

    return Image.fromarray(image_array)

def decode_tensors(pipe, step, timestep, callback_kwargs, requestId, publisher):
    latents = callback_kwargs["latents"]
    # image = callback_kwargs["image"]
    
    image = latents_to_rgb(latents)

    url = upload(img=image)
    publish(requestId, url, False, publisher)

    return callback_kwargs

def imgGenerate(flowers=['res_rose, hydrangea, lily'], threadNum=-1, requestId=-1, publisher=None):

  pipeline = StableDiffusionXLPipeline.from_single_file(
      os.getenv('SD_MODEL_NAME'), use_safetensors=True,
      torch_dtype=torch.float16,
    ).to("cuda:"+str(threadNum))

  prompt = f"a fresh and beautiful bouquet wraped in paper. {flowers[0] if len(flowers) > 0 else ''}, {flowers[1] if len(flowers) > 1 else ''}, {flowers[2] if len(flowers) > 2 else ''}, product image, sunny spring morning, high resolution, 4k image"
  negative_prompt ="ugly, deformed, disfigured, poor, blurry, human, arms, hand, finger"

  callback_function = functools.partial(decode_tensors, requestId=requestId, publisher=publisher)

  # generate image
  image = pipeline(
              prompt = prompt,
              negative_prompt = negative_prompt,
              
              height=768,
              width=768,
              
              num_inference_steps=28,

              callback_on_step_end=callback_function,
              callback_on_step_end_tensor_inputs=["latents"]
              #callback_on_step_end_tensor_inputs=["image"]

              ).images[0]


  return image