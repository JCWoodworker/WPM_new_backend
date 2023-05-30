import requests
import json

# This seeds a list of fake users to the database for testing login and registration

usernames = [
    "fakeuser1",
    "fakeuser2",
    "fakeuser3",
]

for username in usernames:
    url = "http://localhost:3000/users/register"
    headers = {
        'Content-Type': 'application/json'
    }
    payload = json.dumps({
        "firstName": f"{username}",
        "lastName": "Lastname",
        "email": f"{username}@user.com",
        "cellPhone": "1234567890",
        "username": f"{username}",
        "password": f"{username}",
        "userType": "user"
    })
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
