use pyo3::prelude::*;

// Python me ye function call kar sakte hain:
// py_bridge.add(10, 20) → 30
#[pyfunction]
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Python me: py_bridge.multiply(15, 27) → 405
#[pyfunction]
fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

// Python me: py_bridge.greet("Ali") → "Hello Ali from Rust!"
#[pyfunction]
fn greet(name: &str) -> String {
    format!("Hello {} from Rust!", name)
}

// Yeh sab functions Python ko register karta hai
#[pymodule]
fn py_bridge(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(add, m)?)?;
    m.add_function(wrap_pyfunction!(multiply, m)?)?;
    m.add_function(wrap_pyfunction!(greet, m)?)?;
    Ok(())
}