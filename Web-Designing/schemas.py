# schemas.py
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class TalentBase(BaseModel):
    name: str
    email: EmailStr
    skills: Optional[str] = None
    experience_years: Optional[int] = None

class TalentCreate(TalentBase):
    pass

class TalentResponse(TalentBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True