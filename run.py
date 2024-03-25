
from dotenv import load_dotenv
import os

import redis
import json

from BouquetUrlTransferDto import BouquetUrlTransferDto


load_dotenv()

host = os.getenv('REDIS_HOST')
port = os.getenv('REDIS_PORT')
password = os.getenv('REDIS_PASSWORD')

rd = redis.Redis(host=host, port=port, password=password)

print(rd.ping())

# publisher = rd

# testDto = BouquetUrlTransferDto()

# publisher.publish('ch2', json.dumps(testDto.__dict__))

# print(testDto)
# print(json.dumps(testDto.__dict__))