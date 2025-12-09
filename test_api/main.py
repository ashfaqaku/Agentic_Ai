from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path
import os
app = FastAPI()

@app.get("/")
def home():
    return {"Message": "Fast Api is working"}

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
