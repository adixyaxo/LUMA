import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os

print(f"MONGOURL: {repr(os.getenv('MONGOURL'))}")
try:
    client = AsyncIOMotorClient(os.getenv("MONGOURL"))
    print("Client created successfully, trying to connect...")
    async def ping():
        await client.admin.command('ping')
        print("Connected!")
    asyncio.run(ping())
except Exception as e:
    import traceback
    traceback.print_exc()
