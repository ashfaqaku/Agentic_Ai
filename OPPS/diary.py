import datetime

class PersonalDiary:
    def __init__(self):
        self.entries = []
        print("Diary Started! ")
    
    def add_entry(self):
        entry_text = input("Aaj apna din kaisa tha?")
        date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.entries.append({"date":date, "entry":entry_text})
        print("Entry Saved!")
    def view_entries(self):
        if not self.entries:
            print("koi entries nahi hain.")
            return
        print("\n--- Apni Diary ---")
        for i, entry in enumerate(self.entries,1):
            print(f"{i}. {entry['date']}: {entry['entry']}")
            
    def run(self):
        while True:
            print("\n1. New Entry")
            print("2. View Entries")
            print("3. Exit")

            choice = input("Apna Choice dalo (1/2/3):")

            if choice == '1':
                self.add_entry()
            elif choice == '2':
                self.view_entries()
            elif choice == '3':
                print("Bye!")
                break
            else:
                print("Galat Choice! Phr try karo.")

if __name__ == "__main__": 
    diary = PersonalDiary()
    diary.run()
