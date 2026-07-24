from src.config.templates import templates
from fastapi import APIRouter
from fastapi.requests import Request
router = APIRouter()


@router.get("/signup")
async def signup(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/signup.html",
    context={}
  )

@router.get("/login")
async def login(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/login.html",
    context={}
  )
