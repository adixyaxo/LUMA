from fastapi import APIRouter
from fastapi.requests import Request
from src.config.templates import templates
router = APIRouter()

@router.get("/")
async def home(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="pages/home.html",
    context={}
  )

@router.get("/about")
async def about(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="pages/about.html",
    context={}
  )
