const express = require('express')
const router = new express.Router()
const User = require('../models/cognito-user')
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
require('dotenv/config')
global.fetch = require('node-fetch');

const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID
}
const pool_region = process.env.AWS_COGNITO_REGION
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

router.get('/signup', (req, res) => {
    res.render('index')
})

router.post('/signup', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const gender = req.body.gender
    const birthdate = req.body.birthdate
    const address = req.body.address
    const phone_number = req.body.phone_number

    const attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "name", Value: name }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "gender", Value: gender }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "birthdate", Value: birthdate }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "address", Value: address }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "phone_number", Value: phone_number }));

    userPool.signUp(email, password, attributeList, null, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
    })
})

module.exports = router