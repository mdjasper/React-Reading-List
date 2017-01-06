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
        title: "React Reading List",
        tags: [
            {"name": "description", "content": "A demo app for the react stack"},
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

const mergeAllProps = (state, actions) => ({
  ...state, ...actions
});


export default connect(mapStateToProps, bindActionsToDispatch, mergeAllProps)(metaHome);
