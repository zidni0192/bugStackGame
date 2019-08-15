import host from '../host'
import axios from 'axios'

export const getPattern= ()=>{
    return{
        type:'GET_PATTERN',
        payload:axios.get(`${host}/pattern`)
    }
}