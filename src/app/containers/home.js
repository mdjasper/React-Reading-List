import Home from '../components/Home';
import { connect } from 'react-redux';
import { addMeta } from '../hocs/add-meta';
import hideGreeting from '../actions/greeting.js';

const metaHome = addMeta(Home);

const mapStateToProps = ({greeting, params}, ownProps) => ({
    meta: {
        title: "Homepage, yo!",
        tags: [
            {"name": "description", "content": "A React Starter"},
            {"property": "og:type", "content": "article"}
        ]
    },
    greet: greeting.visible,
    name: ownProps.params.name
});

const bindActionsToDispatch = (dispatch) => ({
    greetingAction: ()=>{dispatch(hideGreeting())}
});

const mergeAllProps = (state, actions, own) => ({
  ...state, ...actions
});


export default connect(mapStateToProps, bindActionsToDispatch, mergeAllProps)(metaHome);
