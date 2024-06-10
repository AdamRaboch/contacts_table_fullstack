import mysql.connector
from flask import Flask, render_template, request, redirect
import os
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
# Connect to MySQL database
db = mysql.connector.connect(
   host=os.getenv("DB_HOST"),
   user=os.getenv("DB_USER"),
   password=os.getenv("DB_PASSWORD"),
   database=os.getenv("DB_NAME")
)


cursor = db.cursor(dictionary=True)



def get_contacts():
   cursor.execute("SELECT * FROM contacts")
   result = cursor.fetchall()
   return result

def findByNumber(number):
   cursor.execute("SELECT * FROM contacts WHERE number = %s", (number,))
   result = cursor.fetchone()
   return result

def check_contact_exist(name, email):
   cursor.execute("SELECT * FROM contacts WHERE name = %s OR email = %s", (name, email))
   result = cursor.fetchone()
   return bool(result)

def search_contacts(search_name):
   cursor.execute("SELECT * FROM contacts WHERE name LIKE %s", ('%' + search_name + '%',))
   result = cursor.fetchall()
   return result

def create_contact(name, phone, email, gender, photo):
     cursor.execute("INSERT INTO contacts (name, phone, email, gender, photo) VALUES (%s, %s, %s, %s, %s)", (name, phone, email, gender, photo))
     db.commit()
     return "Contact added successfully"
 
def delete_contact(number):
   cursor.execute("DELETE FROM contacts WHERE number = %s", (number,))
   db.commit()
   return "Contact deleted successfully"




@app.route('/createContact', methods=['GET','POST'])
def createContact():
    if request.method == 'POST':
        fullname = request.form['fullname']
        email = request.form['email']
        phone = request.form['phone']  
        gender = request.form['gender']
        photo = request.files['photo']

        if not check_contact_exist(fullname, email):
            if photo:
                # create a name for the file to be saved
                file_path = 'static/images/' + fullname + '.jpg'
                # save the file on the server  
                photo.save(file_path)
            # create a new contact
            create_contact(fullname, phone, email, gender, f'{fullname}.jpg')
            return render_template('contacts_table.html', contacts=get_contacts())
        else:
            return render_template('addContactForm.html', error_message='Contact already exists')
    return render_template('addContactForm.html')


@app.route('/viewContacts')
def viewContacts():
   return render_template('contacts_table.html', contacts=get_contacts())

@app.route('/deleteContact/<int:number>')
def deleteContact(number):
   delete_contact(number)
   return redirect('/viewContacts')



@app.route('/search', methods=['POST'])
def search():
   search_name = request.form['search_name']
   search_results = search_contacts(search_name)
   return render_template('contacts_table.html', contacts=search_results)





    
if __name__ == '__main__':
    app.run(port=5000, debug=True)
    

    