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
mycursor.execute(f"SHOW DATABASES;")
my_data = mycursor.fetchall()
print(my_data)
cnx.close()


@app.route("/", methods=['POST', 'GET'])
@app.route("/index.html", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        data = request.form.to_dict()
        print('helo')
        print(data)
        return render_template('index.html')
    else:
        return render_template('index.html')
