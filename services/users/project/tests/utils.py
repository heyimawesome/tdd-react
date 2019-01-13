from project import db
from project.api.models import User


def add_user(username, email, password, admin=False):
    user = User(username=username, email=email, password=password)
    user.admin = admin
    db.session.add(user)
    db.session.commit()
    return user
