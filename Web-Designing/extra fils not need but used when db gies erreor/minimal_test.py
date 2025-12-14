print("Testing PostgreSQL...")
import psycopg2
try:
    conn = psycopg2.connect(
        host="localhost",
        port=5432,
        database="postgres",  # Try default database first
        user="postgres",
        password="admin123"
    )
    print("SUCCESS: Connected to PostgreSQL!")
    conn.close()
except Exception as e:
    print(f"FAILED: {e}")
