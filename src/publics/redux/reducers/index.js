import {combineReducers} from 'redux'

import user from './user'
import sound from './sound'
import score from './score'
import pattern from './pattern'

const appReducer = combineReducers({
    user,
    sound,
    score,
    pattern
})


export default appReducer   