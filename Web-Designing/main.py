from fastapi import FastAPI, Depends, HTTPException, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles  # ADD THIS LINE
from sqlalchemy.orm import Session
from typing import List, Optional
import uvicorn

# Import your modules
from database import get_db, engine, Base
import models
import schemas

# Create tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(title="Talent Management API", version="1.0.0")

# Setup templates
templates = Jinja2Templates(directory="templates")

from pathlib import Path
Path("static").mkdir(exist_ok=True)  # Ensure static directory exists
app.mount("/static", StaticFiles(directory="static"), name="static")



@app.get("/", response_class=HTMLResponse)
async def home(request: Request, db: Session = Depends(get_db)):
    """Render home page with registration form"""
    try:
        db.execute("SELECT 1")
        mode = "PostgreSQL (Connected)"
    except:
        mode = "In-Memory"
    
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "mode": mode}
    )

@app.post("/submit")
async def submit_talent(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    primary_talent: str = Form(...),
    other_talent: Optional[str] = Form(None),
    notes: Optional[str] = Form(None),
    newsletter: Optional[str] = Form(None),
    db: Session = Depends(get_db)
):
    """Handle form submission"""
    try:
        # Check if email exists
        existing = db.query(models.Talent).filter(models.Talent.email == email).first()
        if existing:
            return RedirectResponse(url="/?error=Email+already+exists", status_code=303)
        
        # Create new talent
        skills = f"{primary_talent}"
        if other_talent:
            skills += f", {other_talent}"
        
        db_talent = models.Talent(
            name=name,
            email=email,
            skills=skills,
            experience_years=0  # You can modify this based on your form
        )
        
        db.add(db_talent)
        db.commit()
        db.refresh(db_talent)
        
        # Redirect to success page or view page
        return RedirectResponse(url="/view", status_code=303)
        
    except Exception as e:
        return RedirectResponse(url=f"/?error={str(e)}", status_code=303)

@app.get("/view", response_class=HTMLResponse)
async def view_talents(request: Request, db: Session = Depends(get_db)):
    """View all talents"""
    talents = db.query(models.Talent).all()
    
    return templates.TemplateResponse(
        "view.html",
        {"request": request, "talents": talents, "total": len(talents)}  # ADDED "total": len(talents)
    )

@app.get("/stats", response_class=HTMLResponse)
async def view_stats(request: Request, db: Session = Depends(get_db)):
    """Show statistics"""
    total = db.query(models.Talent).count()
    
    # Group by skills (simplified)
    skills_count = {}
    talents = db.query(models.Talent).all()
    for talent in talents:
        if talent.skills:
            for skill in talent.skills.split(','):
                skill = skill.strip()
                skills_count[skill] = skills_count.get(skill, 0) + 1
    
    return templates.TemplateResponse(
        "stats.html",
        {
            "request": request,
            "total": total,
            "skills_count": skills_count
        }
    )

# Keep your API endpoints
@app.get("/health")
async def health_check(db: Session = Depends(get_db)):
    try:
        db.execute("SELECT 1")
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "database": "error", "error": str(e)}

@app.get("/api/talents", response_model=List[schemas.TalentResponse])
async def get_talents_api(db: Session = Depends(get_db)):
    talents = db.query(models.Talent).all()
    return talents

@app.post("/api/talents", response_model=schemas.TalentResponse)
async def create_talent_api(talent: schemas.TalentCreate, db: Session = Depends(get_db)):
    existing = db.query(models.Talent).filter(models.Talent.email == talent.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")
    
    db_talent = models.Talent(
        name=talent.name,
        email=talent.email,
        skills=talent.skills,
        experience_years=talent.experience_years
    )
    
    db.add(db_talent)
    db.commit()
    db.refresh(db_talent)
    return db_talent

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)