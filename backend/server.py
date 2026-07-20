import os 
from dotenv import load_dotenv 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware


load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Do nothing here just yet 
    yield 

app = FastAPI(lifespan=lifespan)
# Add limiter logic here 
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# Development is used as a fallback 
ENV = os.getenv("ENV", "development")

if ENV == "production":
    origins = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "").split(",") if o.strip()]
else:
    origins = ["http://127.0.0.1:5173"]

    # If we are working in a GitHub Codespace 
    codespace = os.getenv("CODESPACE_NAME")
    domain = os.getenv("GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN")
    if codespace and domain:
        origins.append(f"https://{codespace}-5173.{domain}")


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
    


