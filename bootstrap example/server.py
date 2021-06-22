import mysql.connector
import sshtunnel

from flask import Flask, request, render_template

app = Flask(__name__, template_folder='template')

cnx = mysql.connector.connect(
    user='cthomas4293',
    password="Tiger6034+",
    host="cthomas4293.mysql.pythonanywhere-services.com",
    database="cthomas4293$resumeContacts"
)

sshtunnel.SSH_TIMEOUT = 5.0
sshtunnel.SSH_TUNNEL_TIMEOUT = 5.0

with sshtunnel.SSHTunnelForwarder(
        'ssh.pythonanywhere.com',
        ssh_username='cthomas4293',
        ssh_password='Tiger6034+',
        remote_bind_address=(
        'cthomas4293.mysql.pythonanywhere-services.com', 3306)) as tunnel:
    connection = mysql.connector.connect(
        user='cthomas4293', password='Tiger6034+',
        host='127.0.0.1', port=tunnel.local_bind_port,
        database='cthomas4293$resumeContacts',
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
        print(data)
        return render_template('index.html')
    else:
        return render_template('index.html')
