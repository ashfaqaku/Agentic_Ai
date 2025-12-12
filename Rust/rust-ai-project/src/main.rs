use ndarray::prelude::*;

fn main() {
    println!("Rust AI Project Started!");
    
    // Simple matrix operations
    let a = arr2(&[[1., 2.], [3., 4.]]);
    let b = arr2(&[[5., 6.], [7., 8.]]);
    let c = a.dot(&b);
    
    println!("Matrix multiplication result:\n{:?}", c);
    
    // Simple neural network layer (conceptual)
    println!("\nSimple neural network layer:");
    let weights = arr1(&[0.5, -0.3, 0.8]);
    let inputs = arr1(&[1.0, 2.0, 3.0]);
    let output: f64 = weights.dot(&inputs);
    println!("Output: {}", output);
}