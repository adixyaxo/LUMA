from motor.motor_asyncio import AsyncIOMotorClient
from src.settings.enviroment import MONGOURL

MONGOCLIENT = AsyncIOMotorClient(MONGOURL)

conn = MONGOCLIENT.LUMA


users = conn.users
messages = conn.messages
conversations = conn.conversations
