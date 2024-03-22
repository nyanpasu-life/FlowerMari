import redis
import json
import threading

class BouquetUrlTransferDto:
    def __init__(self):
        self.requestId = 'testID'
        self.bouquetUrl = 'testURL'



# def listen_for_messages(sub):
#     for message in sub.listen():
#         if message['type'] == 'message':
#             print(f"Received: {message['data'].decode()}")
#             if message['data'].decode() == 'hey':
#                 publisher.publish('channel', 'what')

# # Redis 연결 설정
# redis_host = 'localhost'
# redis_port = 6379
# r = redis.Redis(host=redis_host, port=redis_port)

# # 구독자 설정
# subscriber = r.pubsub()
# subscriber.subscribe('channel')

# # 발신자 설정
# publisher = r

# # 구독자를 위한 스레드 시작
# thread = threading.Thread(target=listen_for_messages, args=(subscriber,))
# thread.start()

rd = redis.Redis(host='j10a704.p.ssafy.io', port=6379, password='flowermari!@')

publisher = rd

testDto = BouquetUrlTransferDto()

publisher.publish('ch2', json.dumps(testDto.__dict__))

print(testDto)
print(json.dumps(testDto.__dict__))
