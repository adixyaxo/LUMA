from src.config.templates import templates
from fastapi import APIRouter
from fastapi.requests import Request

router = APIRouter()

@router.get("/app")
async def dashboard(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="app/dashboard.html",
    context={}
  )