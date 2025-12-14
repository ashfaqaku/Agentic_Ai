use actix_cors::Cors;
use actix_web::{get, post, web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};
use shuttle_actix_web::ShuttleActixWeb;

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
    HttpResponse::Ok().body("Rust Agent Web Server is running! Use POST /api/chat")
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
        format!("I see a math expression: '{}' on {}", req.message, req.platform)
    } else {
        format!("Received on {}: {}", req.platform, req.message)
    };
    
    HttpResponse::Ok().json(AgentResponse { reply: response })
}

#[shuttle_runtime::main]
async fn main() -> ShuttleActixWeb<impl FnOnce(&mut actix_web::web::ServiceConfig) + Send + Clone + 'static> {
    let config = move |cfg: &mut actix_web::web::ServiceConfig| {
        let cors = Cors::permissive();
        
        cfg.service(home)
           .service(chat_test)
           .service(chat_handler)
           .wrap(cors);
    };

    Ok(config.into())
}
