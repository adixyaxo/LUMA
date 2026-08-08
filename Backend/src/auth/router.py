from fastapi import APIRouter
from fastapi.requests import Request

from src.schemas.schemas import userSignup,userSignin
from src.auth.services import handleSignup,handleSignin
router = APIRouter()

@router.post("/signup")
async def signup(request:Request,info:userSignup):
  return await handleSignup(request,info)

@router.post("/login")
async def signin(request:Request,info:userSignin):
  return await handleSignin(request,info)