import React from 'react';
import styles from './BookSearch.css';

export class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.addBook = this.addBook.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    addBook(){
        if (this.searchInput.value) {
            this.props.onSearch(this.searchInput.value);
            this.searchInput.value = '';
        }
    }

    handleEnter(event) {
        if(event.keyCode === 13) { // Enter key
            this.addBook();
        }
    }

    render() {
        return(
            <div className={styles.BookSearch}>
                <span className={styles.Label}>
                    Add book by title or ISBN
                </span>
                <span className={styles.InputWrapper}>
                    <input type="text"
                        ref={input => this.searchInput = input}
                        defaultValue="Cat in the Hat"
                        onKeyDown={this.handleEnter}
                    />
                    <button
                        className={styles.AddButton}
                        onClick={this.addBook}>Add
                    </button>
                </span>
            </div>
        )
    }
}

export default BookSearch;
