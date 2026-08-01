from typing import Annotated
from fastapi import APIRouter,Form
from fastapi.requests import Request

from src.schemas.schemas import userSignup,userSignin
from src.auth.services import handleSignup,handleSignin
router = APIRouter()

@router.post("/signup")
async def register(request:Request,info:Annotated[userSignup,Form()]):
  return await handleSignup(request,info)

@router.post("/login")
async def register(request:Request,info:Annotated[userSignin,Form()]):
  return await handleSignin(request,info)