from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from datetime import datetime
import json
import os
from typing import Optional
from pydantic import BaseModel

app = FastAPI(
    title="🚀 FastAPI Showcase",
    description="A beautiful FastAPI deployment on Vercel",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

# Pydantic models for request validation
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class User(BaseModel):
    username: str
    email: str
    full_name: Optional[str] = None

# In-memory database (for demo)
items_db = []
users_db = []

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Beautiful home page with dashboard"""
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🚀 FastAPI on Vercel</title>
        <style>
            * {{ margin: 0; padding: 0; box-sizing: border-box; }}
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                color: white;
                padding: 20px;
            }}
            .container {{
                max-width: 1200px;
                margin: 0 auto;
            }}
            header {{
                text-align: center;
                padding: 4rem 1rem;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                margin-bottom: 2rem;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }}
            h1 {{
                font-size: 3.5rem;
                margin-bottom: 1rem;
                background: linear-gradient(45deg, #fff, #f0f0f0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }}
            .tagline {{
                font-size: 1.5rem;
                opacity: 0.9;
                margin-bottom: 2rem;
            }}
            .stats {{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }}
            .card {{
                background: rgba(255, 255, 255, 0.1);
                padding: 2rem;
                border-radius: 15px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(5px);
                transition: transform 0.3s ease;
            }}
            .card:hover {{
                transform: translateY(-5px);
                background: rgba(255, 255, 255, 0.15);
            }}
            .card h3 {{
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                color: #fff;
            }}
            .card p {{
                font-size: 2rem;
                font-weight: bold;
                color: #4ade80;
            }}
            .endpoints {{
                margin-top: 3rem;
            }}
            .endpoint-grid {{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1rem;
            }}
            .endpoint {{
                background: rgba(255, 255, 255, 0.08);
                padding: 1.5rem;
                border-radius: 10px;
                border-left: 4px solid #4ade80;
            }}
            .method {{
                display: inline-block;
                padding: 0.25rem 0.75rem;
                border-radius: 4px;
                font-weight: bold;
                font-size: 0.9rem;
                margin-right: 0.5rem;
            }}
            .get {{ background: #10b981; }}
            .post {{ background: #3b82f6; }}
            .put {{ background: #f59e0b; }}
            .delete {{ background: #ef4444; }}
            .url {{
                font-family: monospace;
                color: #d1d5db;
                margin: 0.5rem 0;
            }}
            .btn {{
                display: inline-block;
                padding: 0.75rem 1.5rem;
                background: #4ade80;
                color: #1f2937;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                margin-top: 1rem;
                transition: all 0.3s ease;
            }}
            .btn:hover {{
                background: #22c55e;
                transform: scale(1.05);
            }}
            footer {{
                text-align: center;
                margin-top: 3rem;
                padding-top: 2rem;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                opacity: 0.8;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <h1>🚀 FastAPI on Vercel</h1>
                <p class="tagline">High-performance API deployed globally with style</p>
                <div class="stats">
                    <div class="card">
                        <h3>🌐 Status</h3>
                        <p>🟢 ONLINE</p>
                    </div>
                    <div class="card">
                        <h3>⚡ Response Time</h3>
                        <p>&lt; 100ms</p>
                    </div>
                    <div class="card">
                        <h3>📊 API Version</h3>
                        <p>2.0.0</p>
                    </div>
                    <div class="card">
                        <h3>🕒 Uptime</h3>
                        <p>100%</p>
                    </div>
                </div>
                
                <a href="/docs" class="btn">📚 Interactive API Docs</a>
                <a href="/dashboard" class="btn" style="background: #8b5cf6; margin-left: 1rem;">📊 Live Dashboard</a>
            </header>
            
            <div class="endpoints">
                <h2 style="margin-bottom: 1.5rem; font-size: 2rem;">✨ Available Endpoints</h2>
                <div class="endpoint-grid">
                    <div class="endpoint">
                        <span class="method get">GET</span>
                        <div class="url">/api/health</div>
                        <p>System health check</p>
                    </div>
                    <div class="endpoint">
                        <span class="method get">GET</span>
                        <div class="url">/api/items</div>
                        <p>List all items</p>
                    </div>
                    <div class="endpoint">
                        <span class="method post">POST</span>
                        <div class="url">/api/items</div>
                        <p>Create new item</p>
                    </div>
                    <div class="endpoint">
                        <span class="method get">GET</span>
                        <div class="url">/api/users</div>
                        <p>Get all users</p>
                    </div>
                    <div class="endpoint">
                        <span class="method get">GET</span>
                        <div class="url">/api/stats</div>
                        <p>API statistics</p>
                    </div>
                    <div class="endpoint">
                        <span class="method get">GET</span>
                        <div class="url">/api/time</div>
                        <p>Current server time</p>
                    </div>
                </div>
            </div>
            
            <footer>
                <p>Deployed on Vercel • Powered by FastAPI • {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;">
                    <a href="https://github.com/yourusername/fastapi-final" style="color: #93c5fd; text-decoration: none;">GitHub</a> • 
                    <a href="/docs" style="color: #93c5fd; text-decoration: none; margin-left: 1rem;">API Documentation</a> • 
                    <a href="/redoc" style="color: #93c5fd; text-decoration: none; margin-left: 1rem;">ReDoc</a>
                </p>
            </footer>
        </div>
        
        <script>
            // Auto-update time
            function updateTime() {{
                const timeElement = document.querySelector('footer p');
                const now = new Date();
                const timeString = now.toISOString().replace('T', ' ').substring(0, 19);
                timeElement.innerHTML = `Deployed on Vercel • Powered by FastAPI • ${{timeString}}`;
            }}
            setInterval(updateTime, 1000);
            
            // Add hover effects
            document.querySelectorAll('.card').forEach(card => {{
                card.addEventListener('mouseenter', () => {{
                    card.style.transform = 'translateY(-5px)';
                }});
                card.addEventListener('mouseleave', () => {{
                    card.style.transform = 'translateY(0)';
                }});
            }});
        </script>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)

@app.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request):
    """Interactive dashboard"""
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>📊 API Dashboard</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
            body {{ font-family: Arial; padding: 20px; background: #f5f5f5; }}
            .grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }}
            .chart-container {{ background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }}
            h1 {{ color: #333; }}
        </style>
    </head>
    <body>
        <h1>📊 API Performance Dashboard</h1>
        <div class="grid">
            <div class="chart-container">
                <canvas id="requestsChart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="responseTimeChart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="endpointUsageChart"></canvas>
            </div>
        </div>
        <script>
            // Sample charts
            new Chart(document.getElementById('requestsChart'), {{
                type: 'line',
                data: {{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{{
                        label: 'API Requests',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }}]
                }}
            }});
            
            new Chart(document.getElementById('responseTimeChart'), {{
                type: 'bar',
                data: {{
                    labels: ['/health', '/items', '/users', '/stats'],
                    datasets: [{{
                        label: 'Response Time (ms)',
                        data: [45, 60, 75, 30],
                        backgroundColor: ['#4ade80', '#3b82f6', '#f59e0b', '#ef4444']
                    }}]
                }}
            }});
        </script>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)

# API Endpoints
@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "FastAPI on Vercel",
        "version": "2.0.0",
        "timestamp": datetime.now().isoformat(),
        "environment": "production"
    }

@app.get("/api/time")
async def get_time():
    """Get current server time"""
    return {
        "timestamp": datetime.now().isoformat(),
        "utc": datetime.utcnow().isoformat(),
        "timezone": "UTC",
        "formatted": datetime.now().strftime("%A, %B %d, %Y %I:%M:%S %p")
    }

@app.get("/api/items")
async def get_items(skip: int = 0, limit: int = 10):
    """Get all items with pagination"""
    return {
        "items": items_db[skip:skip + limit],
        "total": len(items_db),
        "skip": skip,
        "limit": limit
    }

@app.post("/api/items")
async def create_item(item: Item):
    """Create a new item"""
    item_data = item.dict()
    item_data["id"] = len(items_db) + 1
    item_data["created_at"] = datetime.now().isoformat()
    items_db.append(item_data)
    return {"message": "Item created successfully", "item": item_data}

@app.get("/api/items/{item_id}")
async def get_item(item_id: int):
    """Get specific item by ID"""
    if item_id < 1 or item_id > len(items_db):
        raise HTTPException(status_code=404, detail="Item not found")
    return items_db[item_id - 1]

@app.get("/api/users")
async def get_users():
    """Get all users"""
    sample_users = [
        {"id": 1, "username": "alice", "email": "alice@example.com", "role": "admin"},
        {"id": 2, "username": "bob", "email": "bob@example.com", "role": "user"},
        {"id": 3, "username": "charlie", "email": "charlie@example.com", "role": "user"}
    ]
    return {"users": sample_users, "count": len(sample_users)}

@app.post("/api/users")
async def create_user(user: User):
    """Create a new user"""
    user_data = user.dict()
    user_data["id"] = len(users_db) + 1
    user_data["created_at"] = datetime.now().isoformat()
    users_db.append(user_data)
    return {"message": "User created successfully", "user": user_data}

@app.get("/api/stats")
async def get_stats():
    """Get API statistics"""
    return {
        "total_requests": 1000,
        "active_endpoints": 8,
        "uptime": "99.9%",
        "average_response_time": "45ms",
        "memory_usage": "65MB",
        "last_updated": datetime.now().isoformat()
    }

@app.get("/api/weather")
async def get_weather(city: str = "London"):
    """Mock weather API"""
    import random
    conditions = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"]
    return {
        "city": city,
        "temperature": random.randint(15, 30),
        "condition": random.choice(conditions),
        "humidity": random.randint(40, 90),
        "wind_speed": random.randint(0, 20),
        "unit": "celsius"
    }

@app.get("/api/quotes")
async def get_random_quote():
    """Get random inspirational quote"""
    quotes = [
        {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
        {"quote": "Innovation distinguishes between a leader and a follower.", "author": "Steve Jobs"},
        {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
        {"quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill"},
        {"quote": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"}
    ]
    import random
    return random.choice(quotes)

# Error handlers
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": exc.detail, "status_code": exc.status_code}
    )

@app.exception_handler(404)
async def not_found_handler(request, exc):
    return JSONResponse(
        status_code=404,
        content={"error": "Endpoint not found", "available_endpoints": [
            "/", "/dashboard", "/docs", "/redoc",
            "/api/health", "/api/items", "/api/users", "/api/stats",
            "/api/time", "/api/weather", "/api/quotes"
        ]}
    )

# Startup event
@app.on_event("startup")
async def startup_event():
    """Initialize with sample data"""
    sample_items = [
        {"id": 1, "name": "Laptop", "description": "High-performance laptop", "price": 999.99, "category": "electronics"},
        {"id": 2, "name": "Book", "description": "Programming guide", "price": 29.99, "category": "books"},
        {"id": 3, "name": "Coffee Mug", "description": "Developer's mug", "price": 12.99, "category": "home"}
    ]
    items_db.extend(sample_items)
    
    print("🚀 FastAPI server started successfully!")
    print("📚 Docs available at: /docs")
    print("📊 Dashboard at: /dashboard")