from sqlalchemy import select, update

from app.configs.database import DBConnection
from app.model.person_model import Person


class PersonController:
    @staticmethod
    async def insert(data: dict) -> Person:
        """Initializes a new instance of the Person class and inserts the specified data.
        Parameters:
            data (Person): The data to insert.
        Returns:
            Person: The inserted data.
        """
        with DBConnection() as conn:
            try:
                user = Person(**data)
                conn.session.add(user)
                conn.session.commit()
                return user
            except Exception as exe:
                conn.session.rollback()
                raise exe

    @staticmethod
    async def get_all_people() -> list[Person]:
        """Get all people"""
        with DBConnection() as conn:
            query = select(Person)
            people = conn.session.scalars(query).all()
            return people

    @staticmethod
    async def get_by_id(person_id: str) -> Person:
        """Get a person by id"""
        with DBConnection() as conn:
            query = select(Person).where(Person.id_person == person_id)
            person = conn.session.scalar(query)
            return person

    @staticmethod
    async def update(person_id: str, data: dict) -> Person:
        """Update a person by id"""
        with DBConnection() as conn:
            query = update(Person).where(Person.id_person == person_id).values(**data)
            conn.session.execute(query)
            conn.session.commit()

    @staticmethod
    async def delete(person_id: str) -> None:
        """Delete a person by id"""
        with DBConnection() as conn:
            query = select(Person).where(Person.id_person == person_id)
            person = conn.session.scalar(query)
            conn.session.delete(person)
            conn.session.commit()
