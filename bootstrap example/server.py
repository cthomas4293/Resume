from flask import Flask, request, render_template

app = Flask(__name__, template_folder='template')


@app.route("/", methods=['POST', 'GET'])
@app.route("/index.html", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        return render_template('index.html')
    else:
        return render_template('index.html')
