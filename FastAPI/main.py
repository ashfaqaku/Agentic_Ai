# main.py - SIMPLE WORKING VERSION (No LangChain)
from fastapi import FastAPI
from pydantic import BaseModel
import openai
from dotenv import load_dotenv
import os
from datetime import datetime

# Load environment variables
load_dotenv()

app = FastAPI()

# Setup OpenAI
api_key = os.getenv("OPENAI_API_KEY")
if api_key:
    openai.api_key = api_key
    print("✅ OpenAI API configured")
else:
    print("⚠️ Warning: OPENAI_API_KEY not found in .env")

class ChatRequest(BaseModel):
    prompt: str

@app.get("/")
def home():
    return {
        "message": "AI Agent API (Simple OpenAI)",
        "status": "running",
        "openai_configured": bool(api_key),
        "credits": "$18 free available",
        "endpoints": {
            "POST /chat": "Chat with GPT-3.5",
            "GET /multiply/5/3": "Multiply numbers",
            "GET /time": "Current time",
            "GET /docs": "Interactive API documentation"
        }
    }

@app.post("/chat")
async def chat(request: ChatRequest):
    """Simple chat endpoint using OpenAI directly"""
    if not api_key:
        return {
            "success": False,
            "error": "OpenAI API key not configured",
            "fix": "Create .env file with OPENAI_API_KEY=your-key"
        }
    
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant."},
                {"role": "user", "content": request.prompt}
            ],
            max_tokens=150,
            temperature=0.7
        )
        
        return {
            "success": True,
            "response": response.choices[0].message.content,
            "model": "gpt-3.5-turbo",
            "tokens_used": response.usage.total_tokens,
            "cost_note": "Using your $18 free credits"
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "suggestion": "Check your API key and internet connection"
        }

@app.get("/multiply/{a}/{b}")
def multiply(a: float, b: float):
    """Simple multiplication tool"""
    return {
        "operation": f"{a} × {b}",
        "result": a * b,
        "note": "Simple tool without AI"
    }

@app.get("/time")
def get_time():
    """Get current time"""
    return {
        "current_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "timezone": "UTC"
    }

@app.post("/agent")
async def agent_endpoint(request: ChatRequest):
    """AI agent that can use tools"""
    if not api_key:
        return {"error": "API key not configured"}
    
    # Check if prompt needs tool use
    prompt_lower = request.prompt.lower()
    
    # If it's a math question
    if "multiply" in prompt_lower or "times" in prompt_lower or "×" in prompt_lower or "*" in prompt_lower:
        # Extract numbers
        import re
        numbers = re.findall(r'\d+', request.prompt)
        if len(numbers) >= 2:
            result = float(numbers[0]) * float(numbers[1])
            return {
                "type": "tool_used",
                "tool": "multiply",
                "numbers": numbers[:2],
                "result": result,
                "full_response": f"{numbers[0]} × {numbers[1]} = {result}"
            }
    
    # If asking for time
    if "time" in prompt_lower or "clock" in prompt_lower:
        return {
            "type": "tool_used",
            "tool": "time",
            "result": datetime.now().strftime("%H:%M:%S"),
            "full_response": f"Current time is {datetime.now().strftime('%H:%M:%S')}"
        }
    
    # Otherwise use AI
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are an AI agent that can use tools. Available tools: multiply (for math), time (for current time). Use them when appropriate."},
                {"role": "user", "content": request.prompt}
            ],
            max_tokens=200
        )
        
        return {
            "type": "ai_response",
            "response": response.choices[0].message.content,
            "model": "gpt-3.5-turbo"
        }
        
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    print("=" * 50)
    print("🤖 SIMPLE AI AGENT API")
    print("=" * 50)
    if api_key:
        print("✅ OpenAI: READY ($18 free credits)")
    else:
        print("⚠️ OpenAI: NOT CONFIGURED")
        print("   Create .env file with: OPENAI_API_KEY=your-key")
    print("📡 Endpoints:")
    print("  POST /chat     - Direct chat with AI")
    print("  POST /agent    - AI agent with tool detection")
    print("  GET  /multiply/5/3 - Multiply numbers")
    print("  GET  /time     - Current time")
    print("=" * 50)
    print("🚀 Server: http://localhost:8000")
    print("📝 Docs: http://localhost:8000/docs")
    print("💰 Monitor usage: https://platform.openai.com/usage")
    print("=" * 50)
    
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)