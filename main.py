from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.router.public import router as publicRouter
from src.app.router import router as appRouter
from src.auth.router import router as authRouter

app = FastAPI()
app.mount("/static",StaticFiles(directory="static"),name="static")

app.include_router(publicRouter)
app.include_router(appRouter)
app.include_router(authRouter)
