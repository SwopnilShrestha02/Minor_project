
# A simple Ecommerce Webapp with Recommendation System

It's a minor project for college

## Reqirements to run

1. Node.js
2. Git
3. Code Editor (VS Code)

## Instruction to run this project

1. Clone this repo
2. In root directory (where the back and front folder is)


```bash
 npm install (installs all the required dependencies for backend )
```
3. Now change the directory to frontend
```bash
 cd frontend
 npm install --legacy-peer-deps (installs all the required dependencies for backend)
 ```
 4. You need the the .env ( environment variables to run this project )
 It should look like this
 ```bash
 NODE_ENV = development
PORT = 5000
MONGO_URI = ( Your mongoDB URI)
JWT_SECRET = (JSONWebToken Secret Token)
PAYPAL_CLIENT_ID = (paypal client id for transaction)
 ```

    