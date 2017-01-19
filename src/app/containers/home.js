import { Component } from 'react';
import Helmet from 'react-helmet';
import Home from '../components/Home';
import { connect } from 'react-redux';
import hideGreeting from '../actions/greeting.js';
import { search } from '../actions/bookSearch.js';
import { getRecommendations } from '../actions/recommendations.js';

const mapStateToProps = ({greeting, params, recommendations, readingList}, ownProps) => ({
    meta: {
        title: "React Reading List",
        tags: [
            {"name": "description", "content": "A demo app for the react stack"},
            {"property": "og:type", "content": "article"}
        ]
    },
    greet: greeting.visible,
    name: ownProps.params.name,
    recommendations,
    readingList
});

const bindActionsToDispatch = (dispatch) => ({
    greetingAction: () => dispatch(hideGreeting()),
    onLoad: () => dispatch(getRecommendations()),
    onSearch: (q) => dispatch(search(q))
});

const mergeAllProps = (state, actions) => ({
  ...state, ...actions
});

class HomeContainer extends Component {

    static onServer(props, store){
        return store.dispatch(getRecommendations());
    }

    componentDidMount(){
        const { onLoad } = this.props;
        if(onLoad) {
            return onLoad();
        }
    }

    render(){
        return (
            <div>
                <Helmet { ...this.props.meta }/>
                {
                    this.props.recommendations.length > 0
                    ? <Home { ...this.props } />
                    : <h1>Loading</h1>
                }

            </div>
        )
    }
}

export default connect(mapStateToProps, bindActionsToDispatch, mergeAllProps)(HomeContainer);
