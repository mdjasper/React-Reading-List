import React from 'react';
import styles from './Recommendations.css';

const duration = 9;

class recommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            timer: duration
        };
        this.next = this.next.bind(this);
        this.add = this.add.bind(this);
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
            index: index === this.props.books.length - 1 && this.props.repeat ? 0 : index + 1,
            timer: duration
        }));
    }

    add() {
        this.next();
        this.props.onAdd(this.props.books[this.state.index].title);
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
                <div className={styles.Recommendation}>
                    <h2>Book Recommendation</h2>
                    <p>Add <span className={styles.link} onClick={this.add}>{this.props.books[this.state.index].title}</span> to your reading list</p>
                    <p><span onClick={this.next} className={styles.link}>Next</span> recommendation in {this.state.timer} seconds</p>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default recommendation;
