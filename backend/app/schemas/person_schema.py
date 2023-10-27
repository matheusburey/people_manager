from datetime import date

from pydantic import BaseModel


class Person(BaseModel):
    name: str
    rg: str
    cpf: str
    birth_date: date
    admission_date: date
    position: str
