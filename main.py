from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static",StaticFiles(directory="static"),name="static")

@app.get("/")
async def home(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="pages/home.html",
    context={}
  )

@app.get("/about")
async def about(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="pages/about.html",
    context={}
  )

@app.get("/signup")
async def signup(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/signup.html",
    context={}
  )

@app.get("/login")
async def login(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="auth/login.html",
    context={}
  )

@app.get("/app")
async def dashboard(request:Request):
  return templates.TemplateResponse(
    request=request,
    name="app/dashboard.html",
    context={}
  )
