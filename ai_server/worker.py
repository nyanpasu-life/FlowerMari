import json
import time
import toml
from Dto import BouquetUrlTransferDto
from service.imgGenerate import imgGenerate
from service.publish import publish
from service.upload import upload

def worker(work_queue, publisher, threadNum):
    # print(pipeline)
    while True:
        message = work_queue.get()  # 큐에서 작업을 하나 가져옴
        if message['type'] == 'message':
            inputDto = json.loads(message['data'].decode())
            flowersId = inputDto['flowersId']
            requestId = inputDto['requestId']

            print("############################")
            print('현재시각; ' + time.strftime('%H:%M:%S'))
            print(flowersId)
            print(requestId)

            flowerData = toml.load('./flowerData.toml')
            kor_flowerNames = flowerData['kor_flowerNames']
            eng_flowerNames = flowerData['eng_flowerNames']

            flowers = []
            for i in flowersId[1]:
                idx = i-1
                flowers.append(eng_flowerNames[idx])

            print(flowers)

            #image = imgGenerate(flowers, threadNum, requestId, publisher)

            #url = upload(img=image)

            url = upload()

            publish(requestId, url, True, publisher)

        work_queue.task_done()