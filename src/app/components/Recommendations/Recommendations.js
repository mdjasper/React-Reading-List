import React from 'react';

const duration = 5;

class recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            timer: duration
        };
        this.next = this.next.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => (this.tick()),
            1000
        );
    }

    componentWillUpdate() {
        if(this.state.timer === 1){
            this.next();
        }
        if(this.state.index === this.props.books.length) {
            clearInterval(this.timerID);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    next() {
        this.setState( ({index}) => ({
            index: index + 1,
            timer: duration
        }));
    }

    tick() {
        // because some state updates may be asynchronous you should not rely
        // on this.state (nor this.props) to calculate the next state. Instead
        // use the second form of `setState` that accepts a callback
        this.setState( ({ timer }) => ({
            timer: timer - 1
        }));
    }

    render() {
        if(this.state.index !== this.props.books.length){
            return(
                <div>
                    <h2>Book Recommendation</h2>
                    <p>Add {this.props.books[this.state.index].title} to your reading list</p>
                    <p>Next recommendation in {this.state.timer} seconds or <button onClick={this.next}>Skip</button></p>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default recommendation;
