export const HIDE_GREETING = "HIDE_GREETING";

// reducer
export default (state, action) => {
    switch (action.type){
        case HIDE_GREETING:
            return { visible: false };
        default:
            return { visible: true };
    }
}

// selectors
export const selectVisible = ({visible}) => {return visible};
