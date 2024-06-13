from sqlalchemy import Column, Integer, String
from app.database.database import Base  # Importar a classe Base do módulo database.database

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(20), index=True)
    description = Column(String(100), index=True)
