import host from '../host'
import axios from 'axios'

export const getSounds = ()=>{
    
    return{
        type:'GET_SOUNDS',
        payload:axios.get(`${host}/sound`)
    }
}