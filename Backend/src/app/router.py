from fastapi import APIRouter
from fastapi.requests import Request

router = APIRouter()

@router.get("/app")
async def dashboard(request:Request):
    return {"message": "Hello World"}