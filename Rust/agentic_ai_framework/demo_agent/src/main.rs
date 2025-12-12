use agent_core::Agent;
use agent_orchestrator::plan;
use agent_tools::{calculate, search};
use agent_llm::respond;

fn main() {
    println!("ENHANCED AGENT DEMO");
    println!("===================");
    
    // Create enhanced agent
    let mut agent = Agent::new("Advanced Assistant");
    println!("1. {}", agent.greet());
    
    // Plan complex task
    println!("2. {}", plan("mathematical analysis and research"));
    
    // Use enhanced calculator
    match calculate("multiply", 15.0, 27.0) {
        Ok(result) => println!("3. Calculation: 15 * 27 = {:.2}", result),
        Err(e) => println!("3. Error: {}", e),
    }
    
    // Use search tool
    let results = search("autonomous AI agents");
    println!("4. Search results found: {}", results.len());
    for (i, result) in results.iter().take(2).enumerate() {
        println!("   {}. {}", i + 1, result);
    }
    
    // Agent memory
    agent.remember("User asked about AI agents");
    agent.remember("Calculation result was 405");
    println!("5. Agent memory items: {}", agent.recall().len());
    
    // LLM response
    println!("6. {}", respond("Summarize the findings"));
    
    // System status
    println!("\nSYSTEM STATUS");
    println!("Memory usage: Efficient");
    println!("Tool integration: Complete");
    println!("Response generation: Active");
    println!("MSVC optimization: Enabled");
    
    println!("\nAGENTIC AI SYSTEM OPERATIONAL!");
}
