from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route('/')
def home():
	return render_template("homepage.html")

@app.route('/about')
def about():
	return render_template("about.html")

@app.route('/complaints')
def complaints():
	return render_template("complaints.html")

@app.route('/suggestions')
def suggestions():
	return render_template("suggestion.html")

@app.route('/comments')
def comments():
	return render_template("comments.html")


@app.route('/signin')
def signin():
	return render_template("signin.html")
@app.route('/sigup')
def signup():
	return render_template("signup.html")

if __name__ == '__main__':
	app.secret_key = 'APP_SECRET_KEY'
	app.run()