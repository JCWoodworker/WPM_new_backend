import requests
import json

# This seeds a list of fake users to the database for testing login and registration

usernames = [
    "fakeUser0",
    "fakeUser1",
    "fakeUser2",
    "fakeUser3",
    "fakeUser4",
    "fakeUser5",
    "fakeUser6",
]

for username in usernames:
    url = "http://localhost:3000/users/register"
    headers = {
        'Content-Type': 'application/json'
    }
    payload = json.dumps({
        "firstName": "Johnnyfake",
        "lastName": "Fakeuser",
        "email": f"{username}@user.com",
        "cellPhone": "1234567890",
        "username": f"{username}",
        "password": "fakePassword",
        "userType": "user"
    })
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
