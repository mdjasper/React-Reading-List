import fetchRecommendations from '../services/recommendations.js' 
import {INIT_RECOMMENDATIONS} from '../reducers/recommendations.js';

export const initRecommendations = recommendations => ({
    type: INIT_RECOMMENDATIONS, 
    recommendations
});

export const getRecommendations = () => dispatch => fetchRecommendations().then(res=>dispatch(initRecommendations(res)));

