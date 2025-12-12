# crud.py
from sqlalchemy.orm import Session
import models
import schemas

def create_talent(db: Session, talent):
    """Create a new talent record"""
    db_talent = models.Talent(
        name=talent.name,
        email=talent.email,
        skills=talent.skills,
        experience_years=talent.experience_years
    )
    try:
        db.add(db_talent)
        db.commit()
        db.refresh(db_talent)  # This refreshes to get the ID
        return db_talent  # Return the SQLAlchemy model instance
    except Exception as e:
        db.rollback()
        raise e