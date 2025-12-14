// lib/rust-api.ts

const RUST_API_URL = process.env.NEXT_PUBLIC_RUST_API_URL || 'https://rust-agent-vf4j.shuttle.app';

export async function callAgentApi(message: string): Promise<string> {
  try {
    const response = await fetch(`${RUST_API_URL}/api/agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Agent API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result; // Adjust based on your Rust API response
  } catch (error) {
    console.error('Failed to call agent API:', error);
    throw error;
  }
}