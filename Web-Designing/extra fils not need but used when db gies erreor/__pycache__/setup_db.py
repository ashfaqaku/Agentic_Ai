#!/usr/bin/env python3
import psycopg2
import os

print("=== Setting up PostgreSQL Database with password 'admin123' ===")

# Database configuration
DB_CONFIG = {
    "host": "localhost",
    "port": "5432",
    "user": "postgres",
    "password": "admin123",
    "database": "talent_db"
}

def test_connection(dbname="postgres"):
    """Test PostgreSQL connection"""
    try:
        conn = psycopg2.connect(
            host=DB_CONFIG["host"],
            port=DB_CONFIG["port"],
            user=DB_CONFIG["user"],
            password=DB_CONFIG["password"],
            database=dbname,
            connect_timeout=5
        )
        print(f"✅ Successfully connected to {dbname} database!")
        return conn
    except psycopg2.OperationalError as e:
        print(f"❌ Connection failed: {e}")
        return None
    except Exception as e:
        print(f"❌ Error: {e}")
        return None

# Step 1: Test connection
print(f"\n1. Testing PostgreSQL connection...")
conn = test_connection("postgres")

if not conn:
    print("\n❌ Could not connect to PostgreSQL. Possible issues:")
    print("   1. PostgreSQL service is not running")
    print("   2. Wrong password (trying 'admin123')")
    print("   3. Different port or host")
    
    # Ask for alternative configuration
    print("\n💡 Try alternative configuration:")
    DB_CONFIG["host"] = input("Host [localhost]: ") or "localhost"
    DB_CONFIG["port"] = input("Port [5432]: ") or "5432"
    DB_CONFIG["user"] = input("Username [postgres]: ") or "postgres"
    DB_CONFIG["password"] = input("Password [admin123]: ") or "admin123"
    
    conn = test_connection("postgres")
    if not conn:
        print("\n❌ Still cannot connect. Please check:")
        print("   - Start PostgreSQL service")
        print("   - Open pgAdmin to verify credentials")
        print("   - Try: 'sudo service postgresql start' (Linux/Mac)")
        print("   - Or: Start PostgreSQL from Windows Services")
        exit(1)

# Step 2: Create database
print(f"\n2. Creating database '{DB_CONFIG['database']}'...")
try:
    conn.autocommit = True
    cursor = conn.cursor()
    
    # Check if database exists
    cursor.execute(f"SELECT 1 FROM pg_database WHERE datname = '{DB_CONFIG['database']}'")
    if cursor.fetchone():
        print(f"✅ Database '{DB_CONFIG['database']}' already exists")
    else:
        cursor.execute(f"CREATE DATABASE {DB_CONFIG['database']}")
        print(f"✅ Database '{DB_CONFIG['database']}' created successfully")
    
    cursor.close()
    conn.close()
    
except Exception as e:
    print(f"❌ Error creating database: {e}")
    exit(1)

# Step 3: Create table
print(f"\n3. Creating 'talents' table...")
conn = test_connection(DB_CONFIG["database"])

if conn:
    try:
        cursor = conn.cursor()
        
        # Drop table if exists (for clean setup)
        cursor.execute("DROP TABLE IF EXISTS talents")
        
        # Create talents table
        create_table_sql = """
        CREATE TABLE talents (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            skills TEXT,
            experience_years INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """
        
        cursor.execute(create_table_sql)
        
        # Insert sample data
        sample_data = [
            ("John Doe", "john@example.com", "Python, FastAPI, PostgreSQL", 5),
            ("Jane Smith", "jane@example.com", "JavaScript, React, Node.js", 3),
            ("Bob Johnson", "bob@example.com", "Python, Django, Docker", 7),
            ("Alice Brown", "alice@example.com", "Java, Spring Boot, MySQL", 4)
        ]
        
        for name, email, skills, exp in sample_data:
            cursor.execute("""
                INSERT INTO talents (name, email, skills, experience_years)
                VALUES (%s, %s, %s, %s)
                ON CONFLICT (email) DO NOTHING
            """, (name, email, skills, exp))
        
        conn.commit()
        
        # Verify
        cursor.execute("SELECT COUNT(*) FROM talents")
        count = cursor.fetchone()[0]
        print(f"✅ 'talents' table created with {count} sample records")
        
        cursor.execute("SELECT id, name, email FROM talents")
        print("\n📋 Sample data inserted:")
        for row in cursor.fetchall():
            print(f"   ID: {row[0]}, Name: {row[1]}, Email: {row[2]}")
        
        cursor.close()
        conn.close()
        
    except Exception as e:
        print(f"❌ Error creating table: {e}")
        exit(1)

# Step 4: Create .env file
print(f"\n4. Creating environment configuration...")
db_url = f"postgresql://{DB_CONFIG['user']}:{DB_CONFIG['password']}@{DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}"

with open(".env", "w") as f:
    f.write(f"DATABASE_URL={db_url}\n")
    f.write(f"POSTGRES_PASSWORD={DB_CONFIG['password']}\n")
    f.write("# Database configuration\n")
    f.write(f"DB_HOST={DB_CONFIG['host']}\n")
    f.write(f"DB_PORT={DB_CONFIG['port']}\n")
    f.write(f"DB_USER={DB_CONFIG['user']}\n")
    f.write(f"DB_NAME={DB_CONFIG['database']}\n")

print("✅ Created '.env' file")
print(f"📝 DATABASE_URL: postgresql://{DB_CONFIG['user']}:********@{DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}")

print("\n" + "="*50)
print("✅ DATABASE SETUP COMPLETED!")
print("="*50)
print("\n🎯 Next, install FastAPI and run your application:")
print("""
1. Install dependencies:
   pip install fastapi uvicorn sqlalchemy pydantic python-dotenv

2. Run FastAPI app:
   uvicorn main:app --reload

3. Access API docs:
   http://localhost:8000/docs
""")