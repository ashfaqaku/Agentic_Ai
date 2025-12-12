# test_pg_connection.py
import psycopg2

print('=' * 50)
print('Testing PostgreSQL Connection to talent_db')
print('=' * 50)

try:
    conn = psycopg2.connect(
        host='localhost',
        port=5432,
        database='talent_db',
        user='postgres',
        password='admin123'
    )
    print('✅ SUCCESS: Connected to PostgreSQL!')
    
    cursor = conn.cursor()
    
    # Check tables
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
    tables = [t[0] for t in cursor.fetchall()]
    print(f'📊 Tables in database: {tables}')
    
    # Check talents data
    cursor.execute('SELECT COUNT(*) FROM talents')
    count = cursor.fetchone()[0]
    print(f'👥 Records in talents table: {count}')
    
    if count > 0:
        cursor.execute('SELECT id, name, email, skills FROM talents')
        print('📝 Data in talents table:')
        for row in cursor.fetchall():
            print(f'   ID {row[0]}: {row[1]} ({row[2]}) - Skills: {row[3]}')
    
    cursor.close()
    conn.close()
    
    print('\n' + '=' * 50)
    print('✅ ALL TESTS PASSED!')
    print('=' * 50)
    
except psycopg2.OperationalError as e:
    print(f'❌ Connection failed: {e}')
    print('\n💡 Possible issues:')
    print('1. Try using 127.0.0.1 instead of localhost')
    print('2. Check if firewall is blocking port 5432')
    print('3. Verify password is "admin123"')
    
except Exception as e:
    print(f'❌ Error: {e}')