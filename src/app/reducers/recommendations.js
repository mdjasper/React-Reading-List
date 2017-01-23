export const INIT_RECOMMENDATIONS = "INIT_RECOMMENDATIONS";

// reducer
export default (state = [], action) => {
    switch(action.type) {
        case INIT_RECOMMENDATIONS:
            return action.recommendations;
        default:
            return state;
    }
}

// selectors
export const selectRecommendations = (state) => {return state};
