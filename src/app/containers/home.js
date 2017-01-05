import Home from '../components/Home';
import { connect } from 'react-redux';
import { addMeta } from '../hocs/add-meta';
import hideGreeting from '../actions/greeting.js';
import { getRecommendations } from '../actions/recommendations.js';
import mountLoad from '../hocs/mount-load';

const LazyHome = mountLoad(Home);

const metaHome = addMeta(LazyHome);

const mapStateToProps = ({greeting, params, recommendations}, ownProps) => ({
    meta: {
        title: "Homepage, yo!",
        tags: [
            {"name": "description", "content": "A React Starter"},
            {"property": "og:type", "content": "article"}
        ]
    },
    greet: greeting.visible,
    name: ownProps.params.name,
    recommendations
});

const bindActionsToDispatch = (dispatch) => ({
    greetingAction: ()=>{dispatch(hideGreeting())},
    onLoad: () => dispatch( getRecommendations() )
});

const mergeAllProps = (state, actions, own) => ({
  ...state, ...actions
});


export default connect(mapStateToProps, bindActionsToDispatch, mergeAllProps)(metaHome);
