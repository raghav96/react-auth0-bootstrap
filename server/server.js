'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://employeemgr.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'http://userleads.com',
    issuer: 'https://employeemgr.auth0.com/',
    algorithms: ['RS256']
});

app.get('/api/users/leads', (req, res) => {
    let leads = [
        {
            id: 99991,
            name: "Lorem Ipsum"
        },
        {
            id: 99992,
            name: 'When Chuck Norris makes a burrito, its main ingredient is real toes.'
        },
        {
            id: 99993,
            name: 'Chuck Norris eats steak for every single meal. Most times he forgets to kill the cow.'
        },
        {
            id: 99994,
            name: "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood."
        },
        {
            id: 99995,
            name: "Chuck Norris recently had the idea to sell his urine as a canned beverage. We know this beverage as Red Bull."
        },
        {
            id: 99996,
            name: 'When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.'
        }
    ];
    res.json(leads);
});

app.get('/api/users/leadsinfo', authCheck, (req,res) => {
    let info = [
        {
            id: 88881,
            name: 'Chuck Norris',
            content: 'As President Roosevelt said: "We have nothing to fear but fear itself. And Chuck Norris."',
            score: 4
        },
        {
            id: 88882,
            name: 'Chuck Norris',
            content: "Chuck Norris only lets Charlie Sheen think he is winning. Chuck won a long time ago.",
            score: 5
        },
        {
            id: 88883,
            name: 'Chuck Norris',
            content: 'Everything King Midas touches turnes to gold. Everything Chuck Norris touches turns up dead.',
            score: 3
        },
        {
            id: 88884,
            name: 'Chuck Norris',
            content: 'Each time you rate this, Chuck Norris hits Obama with Charlie Sheen and says, "Who is winning now?!"',
            score: 6
        },
        {
            id: 88885,
            name: 'Chuck Norris',
            content: "For Charlie Sheen winning is just wishful thinking. For Chuck Norris it's a way of life.",
            score: 8
        },
        {
            id: 88886,
            name: 'Chuck Norris',
            content: "Hellen Keller's favorite color is Chuck Norris.",
            score: 9
        }
    ];
    res.json(info);
});

app.listen(3333);
console.log('Listening on localhost:3333');