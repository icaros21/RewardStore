import axios from 'axios';


const clienteAxios = axios.create({
    baseURL: 'https://aerolab-challenge.now.sh/',
    headers: {
        Accept: 'application/json;charset=UTF-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWViMGIzY2U0ZDkwZTAwNmNiMTMxNTYiLCJpYXQiOjE1OTI0NjIxNDB9.sNDEsPPiUNxY95UPmucbnEeFhufErXzTJktylD379P8'
    }
});


export default clienteAxios;