export const HIDE_GREETING = "HIDE_GREETING";

// reducer
export default (state = {visible: true}, action) => {
    switch (action.type){
        case HIDE_GREETING:
            return { visible: false };
        default:
            return state;
    }
}

// selectors
export const selectVisible = ({visible}) => visible;
