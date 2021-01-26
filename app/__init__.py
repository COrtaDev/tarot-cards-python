import os
from flask import Flask
from flask_migrate import Migrate

from .models import db, Card
from .api.card_routes import card_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(card_routes, url_prefix='/api/cards')

db.init_app(app)
Migrate(app, db)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
