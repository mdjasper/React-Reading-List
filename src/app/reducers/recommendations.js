export const INIT_RECOMMENDATIONS = "INIT_RECOMMENDATIONS";

export default (state = [], action) => {
    switch(action.type) {
        case INIT_RECOMMENDATIONS:
            return action.recommendations;
        default:
            return state;
    }
}