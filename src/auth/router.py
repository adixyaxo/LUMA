from src.config.templates import templates
from fastapi import APIRouter
from fastapi.requests import Request
from src.auth.services import handleSignup, handleSignin
router = APIRouter()


@router.get("/signup")
async def signup(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/signup.html",
    context={}
  )

@router.post("/register")
async def register(request:Request):
  return handleSignup(request)



@router.get("/login")
async def login(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/login.html",
    context={}
  )

@router.post("/authenticate")
async def register(request:Request):
  return handleSignin(request)