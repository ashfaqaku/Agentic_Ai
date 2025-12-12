use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Agent {
    pub name: String,
    pub memory: Vec<String>,
    pub tools: Vec<String>,
}

impl Agent {
    pub fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
            memory: Vec::new(),
            tools: vec![
                "calculator".to_string(),
                "search".to_string(),
                "analyzer".to_string(),
            ],
        }
    }
    
    pub fn greet(&self) -> String {
        format!("Agent {} ready with {} tools", self.name, self.tools.len())
    }
    
    pub fn remember(&mut self, fact: &str) {
        self.memory.push(fact.to_string());
    }
    
    pub fn recall(&self) -> Vec<String> {
        self.memory.clone()
    }
}
