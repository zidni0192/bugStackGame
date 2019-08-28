const intialState = {
    patternList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}
const pattern = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                patternList: action.payload.data
            }
        default:
            return state
    }
}

export default pattern