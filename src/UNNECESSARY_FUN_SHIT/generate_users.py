import requests
import json

usernames = [
    "fakeUser0",
    "fakeUser1",
    "fakeUser2",
    "fakeUser3",
    "fakeUser4",
    "fakeUser5",
    "fakeUser6",
    "fakeUser7",
    "fakeUser8",
    "fakeUser9",
    "fakeUser10",
]

for username in usernames:
    url = "http://localhost:3000/users/register"
    headers = {
        'Content-Type': 'application/json'
    }
    payload = json.dumps({
        "firstName": "Johnnyfake",
        "lastName": "Fakeuser",
        "username": f"{username}",
        "password": "testing",
        "userType": "user"
    })
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
