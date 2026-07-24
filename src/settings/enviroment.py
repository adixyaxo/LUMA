import os
from dotenv import load_dotenv
load_dotenv()

MONGOURL = os.getenv("MONGO_URL")
JWTSECRET = os.getenv("JWTKEY")