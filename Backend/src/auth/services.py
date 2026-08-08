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
  # if (user := await users.find_one({"email":info.email})):
  if ((info.email == "aditya0dagar@gmail.com") & (info.password == "password") ):
    print("Login Sucess")
    return JSONResponse(
          {
            "status":True,
            "message":"User signed in successfully"
          }
    )
    # if user.get("hashed_password") == info.password:
    #   return JSONResponse({
    #     "status":True,
    #     "message":"User signed in successfully"
    # })
    # else:
    #   return JSONResponse({
    #     "status":False,
    #     "message":"Invalid credentials"
    # })
  else:
    return JSONResponse({
      "status":"False",
      "message":"User not found"
  })