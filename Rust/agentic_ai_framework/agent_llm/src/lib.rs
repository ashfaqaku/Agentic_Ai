// agent_llm/src/lib.rs - UPDATED WITH CURRENT MODEL
use std::time::Duration;

pub async fn respond(query: &str) -> Result<String, String> {
    println!("🤖 Agent received: '{}'", query);
    
    // Your Groq API key
    let api_key = "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".to_string();
    
    // Create HTTP client
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(30))
        .build()
        .map_err(|e| format!("Client error: {}", e))?;
    
    println!("📡 Calling Groq AI API...");
    
    // Call Groq API with CURRENT model
    let response = match client.post("https://api.groq.com/openai/v1/chat/completions")
        .header("Authorization", format!("Bearer {}", api_key))
        .header("Content-Type", "application/json")
        .json(&serde_json::json!({
            // ✅ CURRENT WORKING MODELS (Choose one):
            // "model": "llama-3.1-8b-instant",      // Fast & Free
                // "model": "llama-3.1-70b-versatile", // <-- Change this to a valid model
            //    "model": "llama-3.3-70b-versatile",
               "model": "openai/gpt-oss-120b",
            // "model": "llama-3.2-1b-preview",        // Latest & Free
            // "model": "mixtral-8x7b-32768",        // More powerful
            // "model": "gemma-7b-it",               // Google's model
            
            "messages": [{
                "role": "system",
                "content": "You are a helpful AI assistant. Respond naturally, concisely, and helpfully."
            }, {
                "role": "user",
                "content": query
            }],
            "temperature": 0.7,
            "max_tokens": 500,
            "top_p": 1.0
        }))
        .send()
        .await
    {
        Ok(resp) => resp,
        Err(e) => {
            println!("❌ Network error: {}", e);
            return Err(format!("Network error: {}", e));
        }
    };
    
    // Check response status
    let status = response.status();
    println!("📊 API Status: {}", status);
    
    if !status.is_success() {
        let error_text = response.text().await.unwrap_or_default();
        println!("❌ API Error: {}", error_text);
        return Err(format!("API error {}: {}", status, error_text));
    }
    
    // Parse response
    let response_text = match response.text().await {
        Ok(text) => text,
        Err(e) => {
            println!("❌ Failed to read response: {}", e);
            return Err(format!("Failed to read response: {}", e));
        }
    };
    
    println!("📄 API Response received");
    
    // Parse JSON
    let data: serde_json::Value = match serde_json::from_str(&response_text) {
        Ok(d) => d,
        Err(e) => {
            println!("❌ JSON parse error: {}", e);
            return Err(format!("JSON parse error: {}", e));
        }
    };
    
    // Extract AI response
    match data["choices"][0]["message"]["content"].as_str() {
        Some(text) if !text.trim().is_empty() => {
            let ai_response = text.trim().to_string();
            println!("✅ AI Response ({} chars)", ai_response.len());
            Ok(ai_response)
        },
        _ => {
            println!("⚠️ Empty AI response");
            Err("Empty response from AI".to_string())
        }
    }
}