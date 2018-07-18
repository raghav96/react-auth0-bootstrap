import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = '9j73Vou7LBvZePeUHZSDwwkbjKoMkORI';
const CLIENT_DOMAIN = 'employeemgr.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid';
const AUDIENCE = 'http://userleads.com';

var auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN,
    redirectUri: REDIRECT,
    scope: SCOPE,
    audience: AUDIENCE,
    responseType: 'token id_token'
});

export function login() {
    auth.authorize();
}

export function logout() {
    clearIdToken();
    clearAccessToken();
    // TODO:: fix the history component
    window.location.reload('/')
}

export function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({pathname: '/'});
    }
}

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    if(accessToken) localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
    let idToken = getParameterByName('id_token');
    if(idToken) localStorage.setItem(ID_TOKEN_KEY, idToken);
}
export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
    //console.log(encodedToken);
    try {
        const token = decode(encodedToken);
        if (!token.exp) { return null; }

        const date = new Date(0);
        date.setUTCSeconds(token.exp);

        return date;
    } catch(err) {console.log(err)}

}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}