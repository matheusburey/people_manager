from fastapi import APIRouter

from app.controllers.person_controller import PersonController
from app.schemas.person_schema import Person

routers = APIRouter(prefix="/person")


@routers.get("")
async def get_all_persons():
    """Get all people"""
    people = await PersonController.get_all_people()
    return {"data": people}


@routers.get("/{person_id}")
async def get_person_by_id(person_id: str):
    """Get a person by id"""
    person = await PersonController.get_by_id(person_id)
    return {"data": person}


@routers.post("", status_code=201)
async def add_person(data: Person):
    await PersonController.insert(data.__dict__)


@routers.put("/{person_id}")
async def update_person(person_id: str, data: Person):
    await PersonController.update(person_id, data.__dict__)


@routers.delete("/{person_id}", status_code=204)
async def delete_person(person_id: str):
    await PersonController.delete(person_id)
