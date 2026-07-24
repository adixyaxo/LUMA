from fastapi.responses import JSONResponse
from fastapi.requests import Request
from src.schemas.schemas import userSignup,userSignin
from src.config.database import users

async def handleSignup(request:Request,info:userSignup):
  if users.find_one({"email":info.email}):
    return JSONResponse({
      "message":"User already exists"
    })
  else:
    return JSONResponse({
      "message":"User signed in successfully"
  })


async def handleSignin(request:Request,info:userSignin):
  if (user := await users.find_one({"email":info.email})):
    if user.get("password") == info.password:

      return JSONResponse({
        "message":"User signed in successfully"
    })
    else:
      return JSONResponse({
        "message":"Invalid credentials"
    })
  else:
    return JSONResponse({
      "message":"User not found"
  })