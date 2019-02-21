'use strict';

const path = require('path');
const fs = require('fs');
var jwt = require('jsonwebtoken');

exports.requestUserToken = function (){
    var privateKey = fs.readFileSync("./request_tokens/devSandbox.key","utf8");
    var payload = {};
    var currentTime =  Math.floor(Date.now() / 1000);
    var signOptions = {
    	algorithm: "RS512"
    };

    payload.iss = "a79a8315-3c55-4c09-a2ad-773f7db254c8";
    payload.iat = currentTime;
    payload.exp = currentTime + 900;
    payload.sub = "sbMem5c6d72f85090d5";

    var token = jwt.sign(payload, privateKey, signOptions);
    return token;
}

exports.requestProvidersToken = function (){
    var privateKey = fs.readFileSync("./request_tokens/devSandbox.key","utf8");
    var payload = {};
    var currentTime =  Math.floor(Date.now() / 1000);
    var signOptions = {
    	algorithm: "RS512"
    };

    payload.iss = "a79a8315-3c55-4c09-a2ad-773f7db254c8";
    payload.iat = currentTime;
    payload.exp = currentTime + 900


    var token = jwt.sign(payload, privateKey, signOptions);
    return token;

}

