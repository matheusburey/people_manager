from datetime import date

from sqlalchemy import Date, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.configs.base import Base


class Person(Base):
    __tablename__ = "person"

    id_person: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    rg: Mapped[str] = mapped_column(String(100))
    cpf: Mapped[str] = mapped_column(String(100))
    birth_date: Mapped[date] = mapped_column(Date)
    admission_date: Mapped[date] = mapped_column(Date)
    position: Mapped[str] = mapped_column(String(100))

    @property
    def first_name(self) -> str:
        """Returns the first name of the object."""
        return self.name.split(" ")[0]

    @property
    def show_birth_date(self) -> str:
        """Returns the birth date of the object in the format "dd/mm/yyyy"."""
        return self.birth_date.strftime("%d/%m/%Y")

    @property
    def show_admission_date(self) -> str:
        """Returns the admission date of the object in the format "dd/mm/yyyy"."""
        return self.admission_date.strftime("%d/%m/%Y")
