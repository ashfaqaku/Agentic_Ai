#!/bin/bash
echo "=== Rust MSVC Diagnostic ==="
echo "1. Rustc host: $(rustc -vV | grep host)"
echo "2. Cargo host: $(cargo --version --verbose 2>/dev/null | grep -i host)"
echo "3. Active toolchain: $(rustup show active-toolchain)"
echo "4. Default toolchain: $(rustup default)"
echo "============================"
