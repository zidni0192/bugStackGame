import host from '../host'
import axios from 'axios'

export const getScore= ()=>{
    return{
        type:'GET_SCORE',
        payload:axios.get(`${host}/score`)
    }
}

export const patchScore = (data,idUser)=>{
    console.warn(idUser);
    
    return{
        type:'PATCH_SCORE',
        payload:axios.patch(`${host}/score/${idUser}`,data)
    }
}