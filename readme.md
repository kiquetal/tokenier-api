### A simple docker imagae to request token using client credentials flow

#### Prerequisites

Set `CLIENT_ID` and `CLIENT_SECRET` environment variables before running the app
Set `KEYCLOAK_URL` environment variable to the keycloak server url

#### How to run

 npm install
 npm start
 
### Execute the url

curl -XGET http://localhost:3000/token
