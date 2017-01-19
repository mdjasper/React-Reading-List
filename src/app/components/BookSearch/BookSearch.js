import React from 'react';

export class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    click(){
        if (this.searchInput.value) {
            this.props.onSearch(this.searchInput.value);
            this.searchInput.value = '';
        }
    }

    handleEnter(event) {
        if(event.keyCode === 13) { // Enter key
            this.click();
        }
    }

    render() {
        return(
            <span>
                Add book by title or ISBN
                <input type="text"
                    ref={input => this.searchInput = input}
                    defaultValue="Cat in the Hat"
                    onKeyDown={this.handleEnter}
                />
                <button onClick={this.click}>Add</button>
            </span>
        )
    }
}

export default BookSearch;


/*
    Another Enter key solution...
    componentWillMount() {
        this.searchInput.removeEventListener('keydown', this.handleEnter);
    }
*/
