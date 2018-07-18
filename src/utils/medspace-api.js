import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';


export {getUserLeads, getLeadInfo};

function getUserLeads() {
    const url = `${BASE_URL}/api/users/leads`;
    return axios.get(url).then(response => response.data);
}

function getLeadInfo() {
    const url = `${BASE_URL}/api/users/leadsinfo`;
    console.log(getAccessToken());
    return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}