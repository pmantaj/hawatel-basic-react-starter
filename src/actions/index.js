import axios from 'axios';

const ROOT_URL = 'http://maps.googleapis.com/maps/api/geocode/json?address=';

export function getTimezone(city){

    const url = ROOT_URL + city;
    const request = axios.get(url);

    return {
        type: 'GET_TIMEZONE',
        payload: request
    };
}

export function createPost(){

    return {
        type: 'CREATE_POST',
        payload: 'OK'
    }
}