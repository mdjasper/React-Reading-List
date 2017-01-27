import { Component } from 'react';
import Helmet from 'react-helmet';
import Home from '../components/Home';
import { connect } from 'react-redux';
import hideGreeting from '../actions/greeting';
import { toggleRead } from '../actions/book';
import { search, removeBook } from '../actions/bookSearch';
import { getRecommendations } from '../actions/recommendations';
import {
    selectOrderedBooks,
    selectGreetingVisible,
    selectRecommendations
} from '../store';

const mapStateToProps = (state, ownProps) => ({
    name: ownProps.params.name,
    greet: selectGreetingVisible(state),
    recommendations: selectRecommendations(state),
    readingList: normalizeBooks(selectOrderedBooks(state))
});

const bindActionsToDispatch = (dispatch) => ({
    greetingAction: () => dispatch(hideGreeting()),
    onLoad: () => dispatch(getRecommendations()),
    onSearch: (q) => dispatch(search(q)),
    removeBook: (id) => dispatch(removeBook(id)),
    toggleRead: (id) => dispatch(toggleRead(id))
});

const mergeAllProps = (state, actions) => ({
  ...state,
  ...actions,
  meta: {
      title: "React Reading List",
      tags: [
          {"name": "description", "content": "A demo app for the react stack"},
          {"property": "og:type", "content": "article"}
      ]
  }
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


// Tweak the data for easier display
export const normalizeBooks = (books) =>
    books.map( (book) => ({
        author: normalizeAuthor(book.volumeInfo),
        isbn: normalizeIsbn(book.volumeInfo.industryIdentifiers) || book.id,
        thumbnailUrl: normalizeThumbnailUrl(book.volumeInfo.imageLinks),
        ...book
}));

export const normalizeAuthor = (volumeInfo) =>
    volumeInfo.authors
        ? volumeInfo.authors[0]
        : volumeInfo.publisher
            ? volumeInfo.publisher
            : "unknown author"
;

export const normalizeIsbn = (identifiers) => {
    if (!identifiers) return undefined;
    const isbn13 = identifiers.filter( (i) => i.type === "ISBN_13" );
    const isbn10 = identifiers.filter( (i) => i.type === "ISBN_10" );
    const other = identifiers[0]; // when all else fails
    return isbn13.length > 0 ? isbn13[0].identifier
          : ( isbn10.length > 0 ? isbn10[0].identifier
                     : (other ? other.identifier
                              : undefined));
}

export const normalizeThumbnailUrl = (imageLinks) => {
    if (!imageLinks) {
        return undefined;
    }
    return imageLinks.smallThumbnail || imageLinks.thumbnail;
}
