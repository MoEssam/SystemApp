const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
require('dotenv/config')

const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID
}
const pool_region = process.env.AWS_COGNITO_REGION
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


function setCognitoAttributeList (email)