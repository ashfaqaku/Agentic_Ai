from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Book(BaseModel):
    id: int
    title: str
    author: str
    price: float

Books: List[Book] = []

@app.get("/books", response_model=List[Book])
def get_books():
    return Books

@app.post("/books", response_model=Book, status_code=201)  # Fixed: 201 not 281
def create_book(book: Book):  # Fixed: lowercase 'book' parameter
    Books.append(book)
    return book  # Fixed: lowercase 'book'

@app.put("/books/{book_id}", response_model=Book)  # Fixed: curly braces
def update_book(book_id: int, update_book: Book):  # Fixed: lowercase 'book_id'
    for index, book in enumerate(Books):
        if book.id == book_id:
            Books[index] = update_book
            return update_book
    
    raise HTTPException(status_code=404, detail="Book not found")  # Fixed: 'detail'

@app.delete("/books/{book_id}")  # Fixed: curly braces
def delete_book(book_id: int):
    for index, book in enumerate(Books):
        if book.id == book_id:
            Books.pop(index)
            return {"message": "Book deleted successfully"}
    
    raise HTTPException(status_code=404, detail="Book not found")  # Fixed: 'detail'