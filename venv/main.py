from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI() 

class Books(BaseModel):
    id: int
    tittle: str
    author: str
    price: float
Books: list[Books] = []
# Decorators
@app.get("/Books")
def get_Books():
    return "WELLCOME TO BOOKS STORE", Books