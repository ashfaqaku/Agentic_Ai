#!/usr/bin/env python3
import os
import sys
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
import getpass

def setup_postgresql():
    print("=== PostgreSQL Setup for FastAPI ===")
    
    # Get database credentials
    print("\nEnter PostgreSQL credentials:")
    host = input("Host [localhost]: ") or "localhost"
    port = input("Port [5432]: ") or "5432"
    user = input("Username [postgres]: ") or "postgres"
    password = getpass.getpass("Password: ")
    database = input("Database name [talent_db]: ") or "talent_db"
    
    # Test connection to default postgres database
    default_url = f"postgresql://{user}:{password}@{host}:{port}/postgres"
    
    try:
        print(f"\n1. Testing connection to {host}:{port}...")
        engine = create_engine(default_url)
        with engine.connect() as conn:
            print("✅ Connected to PostgreSQL successfully!")
            
            # Check if database exists
            result = conn.execute(f"SELECT 1 FROM pg_database WHERE datname = '{database}'")
            if result.fetchone():
                print(f"✅ Database '{database}' already exists")
            else:
                # Create database
                conn.execute(f"CREATE DATABASE {database}")
                print(f"✅ Database '{database}' created successfully")
                
    except OperationalError as e:
        print(f"❌ Connection failed: {e}")
        print("\nPlease check:")
        print("1. Is PostgreSQL installed and running?")
        print("2. Are the credentials correct?")
        print("3. Is the host/port accessible?")
        sys.exit(1)
    
    # Create .env file with database URL
    db_url = f"postgresql://{user}:{password}@{host}:{port}/{database}"
    
    with open(".env", "w") as f:
        f.write(f"DATABASE_URL={db_url}\n")
    
    print(f"\n✅ Created .env file with database URL")
    print(f"📝 DATABASE_URL={db_url}")
    
    # Initialize tables
    print("\n2. Initializing database tables...")
    os.environ["DATABASE_URL"] = db_url
    
    # Import after setting environment variable
    from database import init_db
    init_db()
    
    print("\n✅ Setup completed! You can now run your FastAPI app:")
    print("   uvicorn main:app --reload")
    print("\n📚 API Documentation will be available at: http://localhost:8000/docs")

if __name__ == "__main__":
    setup_postgresql()