from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Settings"""

    database_url: str


@lru_cache
def get_settings():
    """Get settings"""
    return Settings(_env_file=".env", _env_file_encoding="utf-8")


settings = get_settings()
