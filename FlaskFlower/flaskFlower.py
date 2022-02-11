from numpy.core.fromnumeric import std
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
import joblib
from flask import Flask
from flask_cors import CORS



# importação da inteligência
model = joblib.load("iris_model.sav")
std   = joblib.load("iris_model.sav")

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "SETOSA, VERSICOLOR OU VIRGÍNICA?"

# Setosa
# Versicolor
# Virgínica

@app.route("/irisFlower/predict/<alturaSepa>/<larguraSepa>/<alturaPeta>/<larguraPeta>/", methods = ['GET'])
def predict(alturaSepa,larguraSepa,alturaPeta,larguraPeta):
    alturaSepa      = float(alturaSepa)
    larguraSepa     = float(larguraSepa)
    alturaPeta      = float(alturaPeta)
    larguraPeta     = float(larguraPeta)

    X = [[alturaSepa,larguraSepa,alturaPeta,larguraPeta]]

    Outcome = model.predict(X)
    previsao = str(Outcome[0])
    
    return {'key': previsao}
    
app.run(port=8000,host="localhost")

