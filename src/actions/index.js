import axios from 'axios';

export function getTimezone(city){
    const url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+city;
    return {
        type: 'GET_TIMEZONE',
        payload: axios.get(url)
    };
}
