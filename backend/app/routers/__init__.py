from fastapi import APIRouter

from .person_router import routers as person_router

routers = APIRouter(prefix="/api/v1")

routers.include_router(person_router)
