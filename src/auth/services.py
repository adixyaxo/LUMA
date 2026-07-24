from fastapi.responses import JSONResponse
from fastapi.requests import Request
from src.schemas.schemas import userSignup,userSignin


async def handleSignup(request:Request,info:userSignup):
  print(info)
  return JSONResponse({
    "message":"User created successfully"
  })



async def handleSignin(request:Request,info:userSignin):
  print(info)
  return JSONResponse({
    "message":"User signed in successfully"
  })