from typing import Annotated
from src.config.templates import templates
from fastapi import APIRouter,Form
from fastapi.requests import Request
from src.auth.services import handleSignup, handleSignin
from src.schemas.schemas import userSignup,userSignin
router = APIRouter()


@router.get("/signup")
async def signup(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/signup.html",
    context={}
  )

@router.post("/signup")
async def register(request:Request,info:Annotated[userSignup,Form()]):
  return await handleSignup(request,info)



@router.get("/login")
async def login(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/login.html",
    context={}
  )

@router.post("/login")
async def register(request:Request,info:Annotated[userSignin,Form()]):
  return await handleSignin(request,info)