// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;
const DECREMENT = 'DECREMENT'
const INCREMENT = 'INCREMENT'

export function decrement(amnt){
    return {
        type: DECREMENT,
        amnt
    }
}
export function increment(amnt){
    return {
        type: INCREMENT,
        amnt
    }
}


let initialState = {
    currentValue: 0
}
export default function(state = initialState, action){
    switch (action.type) {
        case INCREMENT:
            return Object.assign(
                {},
                state,
                {currentValue: state.currentValue + action.amnt})
        case DECREMENT:
            return Object.assign(
                {},
                state,
                {currentValue: state.currentValue - action.amnt})
    }
    return state;
}