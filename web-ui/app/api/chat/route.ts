export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Call Rust backend
    const res = await fetch('http://localhost:8081/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    
    if (!res.ok) {
      throw new Error(`Rust server error: ${res.status}`);
    }
    
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return Response.json(
      { reply: 'Failed to connect to Rust agent. Make sure Rust server is running on port 8081.' },
      { status: 500 }
    );
  }
}