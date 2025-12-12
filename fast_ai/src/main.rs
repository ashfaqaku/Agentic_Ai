use ndarray::{Array, Array2};

fn main() {
    println!("TEST");
    
    let a: Array2<f32> = Array::from_shape_vec((2, 2), 
        vec![1.0, 2.0, 3.0, 4.0]).unwrap();
    
    let b: Array2<f32> = Array::from_shape_vec((2, 2),
        vec![5.0, 6.0, 7.0, 8.0]).unwrap();
    
    println!("A: {:?}", a);
    println!("B: {:?}", b);
    
    let c = a.dot(&b);
    println!("A * B: {:?}", c);
    
    println!("DONE");
}
