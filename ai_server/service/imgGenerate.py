from diffusers import StableDiffusionXLPipeline, StableDiffusionXLImg2ImgPipeline
import torch
import os
from compel import Compel, ReturnedEmbeddingsType

def imgGenerate(flowers=['res_rose, hydrangea, lily'], pipeline=None, threadNum=-1):

  # compel = Compel(
  #   tokenizer=[pipeline.tokenizer, pipeline.tokenizer_2] ,
  #   text_encoder=[pipeline.text_encoder, pipeline.text_encoder_2],
  #   returned_embeddings_type=ReturnedEmbeddingsType.PENULTIMATE_HIDDEN_STATES_NON_NORMALIZED,
  #   requires_pooled=[False, True]
  # )

  # prompt = f"(a fresh and beautiful bouquet of flowers wraped in paper.)1.1 {flowers[0] if len(flowers) > 0 else ''}, {flowers[1] if len(flowers) > 1 else ''}, {flowers[2] if len(flowers) > 2 else ''}, product image, sunny spring morning. high resolution, 4k image"
  # negative_prompt ="ugly, deformed, disfigured, poor, blurry, human, hand, finger"

  # conditioning, pooled = compel(prompt)
  # negative_conditioning, negative_pooled = compel(negative_prompt)

  
  # # generate image
  # image = pipeline(prompt_embeds=conditioning, pooled_prompt_embeds=pooled,
  #             negative_prompt_embeds=negative_conditioning, negative_pooled_prompt_embeds=negative_pooled,
              
  #             height=1024,
  #             width=1024,
              
  #             num_inference_steps=35,

  #             torch_dtype=torch.float16,
  #             torch_device="cuda:"+str(threadNum)
  #             ).images[0]

  pipeline = StableDiffusionXLPipeline.from_single_file(
      os.getenv('SD_MODEL_NAME'), use_safetensors=True,
      torch_dtype=torch.float16,
    ).to("cuda:"+str(threadNum))

  prompt = f"a fresh and beautiful bouquet wraped in paper. {flowers[0] if len(flowers) > 0 else ''}, {flowers[1] if len(flowers) > 1 else ''}, {flowers[2] if len(flowers) > 2 else ''}, product image, sunny spring morning, high resolution, 4k image"
  negative_prompt ="ugly, deformed, disfigured, poor, blurry, human, hand, finger"


  # generate image
  image = pipeline(
              prompt = prompt,
              negative_prompt = negative_prompt,
              
              height=1024,
              width=1024,
              
              num_inference_steps=35,

              torch_dtype=torch.float16,
              torch_device="cuda:"+str(threadNum)
              ).images[0]


  return image