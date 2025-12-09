# from typing import Union

# from fastapi import FastAPI
# from pydantic import BaseModel

# app = FastAPI()
# @app.get("/")
# def home():
#     return{"message": "fastapi is working Successfully."}

# class TalentForm(BaseModel):
#     name:str
#     email:str
#     primary_talent:str


# @app.get("/submit")
# def submit_form(data: TalentForm):
#     return{
#         "message": "fastapi is working Successfully.","data":data
#     }
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path
import os

# Initialize FastAPI
app = FastAPI()

# Create necessary directories
Path("templates").mkdir(exist_ok=True)
Path("static").mkdir(exist_ok=True)

# Setup templates and static files
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

# Home page - Serves your HTML form
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# Handle form submission
@app.post("/submit")
async def submit_form(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    primary_talent: str = Form(...),
    other_talent: str = Form(""),
    notes: str = Form(""),
    newsletter: str = Form("no")
):
    # Save to file
    try:
        with open("submissions.txt", "a", encoding="utf-8") as f:
            f.write(f"Name: {name}\n")
            f.write(f"Email: {email}\n")
            f.write(f"Primary Talent: {primary_talent}\n")
            f.write(f"Other Talent: {other_talent}\n")
            f.write(f"Notes: {notes}\n")
            f.write(f"Newsletter: {'Yes' if newsletter == 'yes' else 'No'}\n")
            f.write("=" * 40 + "\n\n")
        
        # Show success page
        return templates.TemplateResponse(
            "success.html", 
            {
                "request": request,
                "name": name,
                "primary_talent": primary_talent
            }
        )
        
    except Exception as e:
        return JSONResponse(
            {"error": str(e)},
            status_code=500
        )

# View all submissions
@app.get("/view")
async def view_submissions(request: Request):
    try:
        with open("submissions.txt", "r", encoding="utf-8") as f:
            content = f.read()
        return templates.TemplateResponse(
            "view.html",
            {
                "request": request,
                "content": content
            }
        )
    except:
        return templates.TemplateResponse(
            "view.html",
            {
                "request": request,
                "content": "No submissions yet"
            }
        )

# Run server
if __name__ == "__main__":
    import uvicorn
    print("=" * 60)
    print("🚀 TALENT REGISTRATION FORM SERVER")
    print("🌐 Open: http://localhost:8000")
    print("📁 HTML: templates/index.html")
    print("🎨 CSS: static/style.css")
    print("💾 Data: submissions.txt")
    print("=" * 60)
    
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
