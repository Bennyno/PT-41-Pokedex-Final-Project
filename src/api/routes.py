"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests

api = Blueprint('api', __name__)

@api.route("/pokemon/<int:id>", methods=["GET"])
def get_pokemon_id(id):
    return jsonify(
        requests.get(f'https://pokeapi.co/api/v2/pokemon/{id}').json()
    ), 200

@api.route("/pokemon/<string:name>", methods=["GET"])
def get_pokemon_name(name):
    return jsonify(
        requests.get(f'https://pokeapi.co/api/v2/pokemon/{name}').json()
    ), 200

# @api.route("/pokemon-species", methods=["GET"])
# def get_pokemon_species():
#     return jsonify(
#         requests.get(f'https://pokeapi.co/api/v2/pokemon-species').json()
#     ), 200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    if user:
        return jsonify(logged_in_as=current_user), 200
    else:
        return jsonify({"msg": "Error with the token."})

@api.route("/signup", methods=["POST"])
def sign_up():
    data = request.get_json()   
    user = User(email=data["email"], password = data["password"])

    db.session.add(user)
    db.session.commit()
       
    return jsonify({"msg": "user created"}), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    data = request.json
    if "email" not in data or data["email"]=="": 
        return jsonify({"msg": "email required."}), 400
    if "password" not in data or data["password"]=="":
        return jsonify({"msg": "password required"}), 400

    user = User.query.filter_by(email=data["email"]).first()

    if user is None :
        return jsonify({"msg": "the email you entered is not associated to any account"}), 400
    if user.password != data["password"]:
        return jsonify({"msg": "the password you entered is incorrect"}), 400
     
    access_token = create_access_token(identity=data["email"])
    return jsonify(access_token=access_token),200

# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200