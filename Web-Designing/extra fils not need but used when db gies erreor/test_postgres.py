import psycopg2

def test_connection():
    try:
        conn = psycopg2.connect(
            host='localhost',
            port='5432',
            database='talent_db',
            user='postgres',
            password='admin123'
        )
        print('✅ PostgreSQL connection SUCCESSFUL!')
        
        cursor = conn.cursor()
        
        # Check if talents table exists
        cursor.execute('SELECT COUNT(*) FROM talents')
        count = cursor.fetchone()[0]
        print(f'✅ talents table exists with {count} records')
        
        if count == 0:
            cursor.execute("""
                INSERT INTO talents (name, email, skills, experience_years) 
                VALUES ('Test User', 'test@example.com', 'Python, FastAPI', 3)
            """)
            conn.commit()
            print('✅ Added test record')
            
            cursor.execute('SELECT COUNT(*) FROM talents')
            count = cursor.fetchone()[0]
            print(f'✅ Now has {count} records')
        
        cursor.close()
        conn.close()
        
    except psycopg2.OperationalError as e:
        print(f'❌ Connection failed: {e}')
        print('\n��� Check:')
        print('1. Password is admin123')
        print('2. Database talent_db exists')
        
    except Exception as e:
        print(f'❌ Error: {e}')

if __name__ == '__main__':
    test_connection()
