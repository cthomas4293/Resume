import mysql.connector

from flask import Flask, request, render_template

app = Flask(__name__, template_folder='template')

cnx = mysql.connector.connect(
    user='cthomas4293',
    password="Tiger6034+",
    host="cthomas4293.mysql.pythonanywhere-services.com",
    database="cthomas4293$resumeContacts"
)

mycursor = cnx.cursor()


@app.route("/", methods=['POST', 'GET'])
@app.route("/index.html", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        data = request.form.to_dict()
        name = data['full-name']
        email = data['user-email']
        subject = data['message-subject']
        message = data['user-message']
        mycursor.execute(f"INSERT INTO Contacts (CustomerName, CustomerEmail, CustomerSubject, CustomerMessage)"
        "VALUES (%s, %s, %s, %s)", (name, email, subject, message))
        cnx.commit()
        cnx.close()
        return render_template('index.html')
    else:
        return render_template('index.html')
