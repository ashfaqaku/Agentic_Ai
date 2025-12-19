// web_server/src/main.rs
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use actix_cors::Cors;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct AgentRequest {
    message: String,
    platform: String,
}

#[derive(Serialize)]
struct AgentResponse {
    reply: String,
}

#[get("/")]
async fn home() -> impl Responder {
    HttpResponse::Ok().body("🤖 Rust AI Agent Server is running!\n\nEndpoints:\n- GET  /           : This page\n- POST /api/chat   : Send messages to AI agent")
}

#[post("/api/chat")]
// web_server/src/main.rs - chat_handler
async fn chat_handler(req: web::Json<AgentRequest>) -> impl Responder {
    println!("📨 Received: {} (Platform: {})", req.message, req.platform);
    
    // Get AI response
    let ai_response = agent_llm::respond(&req.message).await;
    
    // Format response
    let reply = match ai_response {
        Ok(response) => {
            if response.is_empty() || response == "No response" {
                format!("🤖 AI is thinking...\n\n📱 Platform: {}\n💭 Your Message: {}", 
                       req.platform, req.message)
            } else {
                format!("🤖 AI Agent Response:\n{}\n\n📱 Platform: {}\n💭 Your Message: {}", 
                       response, req.platform, req.message)
            }
        },
        Err(e) => {
            println!("❌ Agent error: {}", e);
            format!("⚠️ Agent temporarily unavailable: {}\n\n📱 Platform: {}\n💭 Your Message: {}", 
                   e, req.platform, req.message)
        }
    };
    
    HttpResponse::Ok().json(AgentResponse { reply })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("====================================");
    println!("🚀 Rust AI Agent Server Starting...");
    println!("📍 Local: http://localhost:8081");
    println!("📡 API: POST http://localhost:8081/api/chat");
    println!("🤖 Agent LLM: Integrated");
    println!("====================================");
    
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["GET", "POST", "OPTIONS"])
            .allowed_headers(vec!["Content-Type"]);
        
        App::new()
            .wrap(cors)
            .service(home)
            .service(chat_handler)
    })
    .bind("127.0.0.1:8081")?
    .run()
    .await
}