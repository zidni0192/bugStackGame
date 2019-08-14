const intialState = {
    soundList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}
const book = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_SOUNDS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_SOUNDS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_SOUNDS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                soundList: action.payload.data
            }
        default:
            return state
    }
}

export default book