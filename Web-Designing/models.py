# models.py
from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from database import Base

class Talent(Base):
    __tablename__ = "talents"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False, index=True)
    skills = Column(Text)
    experience_years = Column(Integer)
    created_at = Column(DateTime(timezone=True), server_default=func.now())