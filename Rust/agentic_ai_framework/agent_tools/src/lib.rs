pub fn calculate(operation: &str, a: f64, b: f64) -> Result<f64, String> {
    match operation {
        "add" => Ok(a + b),
        "subtract" => Ok(a - b),
        "multiply" => Ok(a * b),
        "divide" => {
            if b == 0.0 {
                Err("Division by zero".to_string())
            } else {
                Ok(a / b)
            }
        }
        _ => Err(format!("Unknown operation: {}", operation)),
    }
}

pub fn search(query: &str) -> Vec<String> {
    vec![
        format!("Result 1 for: {}", query),
        format!("Result 2 for: {}", query),
        format!("Result 3 for: {}", query),
    ]
}
