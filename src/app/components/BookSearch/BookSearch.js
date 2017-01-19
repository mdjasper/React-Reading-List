import React from 'react';

export class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click(){
        this.props.onSearch(this.searchInput.value);
        this.searchInput.value = '';
      }

    render() {
        return(
            <span>
                Add book by title or ISBN
                <input type="text" ref={input => this.searchInput = input} defaultValue="Cat in the Hat"/>
                <button onClick={this.click}>Add</button>
            </span>
        )
    }
}

export default BookSearch;
