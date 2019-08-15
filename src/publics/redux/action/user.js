import axios from 'axios'
import {AsyncStorage} from 'react-native'
import host from '../host'
const localStorage = {
    token : AsyncStorage.getItem('token').then((result)=>{
        return result
    }),
    id : AsyncStorage.getItem('idUser').then((result)=>{
        return result
    })
}
export const getUsers = () => {
    return {
        type: "GET_USERS",
        payload: axios.get(`${host}/user`,null,{
            headers:{
                "x-access-token":`bearer ${localStorage.token}`,
                "authorization":"Allow",
                "x-control-user": localStorage.id
            }
        })
    }
}

export const getByEmail = (data) => {
    return {
        type: "GET_BY_EMAIL",
        payload: axios.post(`${host}/user/login/`,data,{
            headers:{
                "authorization":"Allow",
            }
        })
    }
}

export const register = (data) => {
    return {
        type: "REGISTER",
        payload:axios.post(`${host}/user/register`,data,{
            headers:{
                "authorization":"Allow",
                
            }
        })
    }
}

export const getToken = () =>{
    return{
        type: "GET_TOKEN",
        payload:axios.post(`${host}/user/getToken`,null,{
            headers:{
                "x-access-token":`bearer ${localStorage.token}`,
                "authorization":"Allow",
                "x-control-user": localStorage.id
            }
        })
    }
}
