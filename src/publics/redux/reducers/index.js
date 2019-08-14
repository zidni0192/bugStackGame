import {combineReducers} from 'redux'

import user from './user'
import sound from './sound'

const appReducer = combineReducers({
    user,
    sound
})


export default appReducer   