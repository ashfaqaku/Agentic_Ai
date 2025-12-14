use actix_web::{get, post, web, HttpResponse, Responder};
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
    HttpResponse::Ok().body("Rust Agent API is running! Use POST /api/chat")
}

#[get("/api/chat")]
async fn chat_test() -> impl Responder {
    HttpResponse::Ok().json(AgentResponse {
        reply: "Agent is ready. Send your query.".to_string(),
    })
}

#[post("/api/chat")]
async fn chat_handler(req: web::Json<AgentRequest>) -> impl Responder {
    let response = if req.message.to_lowercase().contains("hello") {
        format!("Hello from Rust Agent! Platform: {}", req.platform)
    } else if req.message.contains('+') || req.message.contains('-') ||
              req.message.contains('*') || req.message.contains('/') {
        format!("Math expression detected: '{}'", req.message)
    } else {
        format!("Received on {}: {}", req.platform, req.message)
    };

    HttpResponse::Ok().json(AgentResponse { reply: response })
}

#[shuttle_runtime::main]
async fn main() -> shuttle_actix_web::ShuttleActixWeb {
    let config = move |cfg: &mut actix_web::web::ServiceConfig| {
        cfg.service(home)
           .service(chat_test)
           .service(chat_handler);
    };

    Ok(config.into())
}
