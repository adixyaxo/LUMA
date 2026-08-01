from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.router.public import router as publicRouter
from src.app.router import router as appRouter
from src.auth.router import router as authRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware

app = FastAPI()
app.mount("/static",StaticFiles(directory="static"),name="static")

origins = ["http://localhost:5173"]


app.add_middleware(
  CORSMiddleware,
  allow_methods=["*"],
  allow_headers=["*"],
  allow_origins=origins,
  allow_credentials=True
)




app.include_router(publicRouter)
app.include_router(appRouter)
app.include_router(authRouter)
