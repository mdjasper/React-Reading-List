export const HIDE_GREETING = "HIDE_GREETING";

export default (state, action) => {
    switch (action.type){
        case HIDE_GREETING:
            return { visible: false };
        default:
            return { visible: true };
    }
}