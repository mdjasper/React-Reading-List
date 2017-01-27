import test from 'tape';
import { initRecommendations } from './recommendations.js';
import { INIT_RECOMMENDATIONS } from '../reducers/recommendations.js';

test('Actions recommendations test', t => {

    t.deepEqual(initRecommendations(['Enders Game', 'Speaker for the Dead']), {type: INIT_RECOMMENDATIONS, recommendations: ['Enders Game', 'Speaker for the Dead']}, 'initRecommendations action');

    t.end();
});
