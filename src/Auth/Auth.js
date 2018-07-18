import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'employeemgr.auth0.com',
        clientID: 'bsk0oAODqS563Zs1p1tJDD7jndPEVSQz',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://employeemgr.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}