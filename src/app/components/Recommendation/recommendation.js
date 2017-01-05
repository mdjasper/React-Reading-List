import React from 'react';

const duration = 5;

class recommendation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            timer: duration
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillUpdate(){
        if(this.state.timer === 1){
            this.next();
        }
        if(this.state.index === this.props.books.length){
            clearInterval(this.timerID);
        }
    }
    
    next(){
        this.setState({
            ...this.state,
            index: this.state.index + 1,
            timer: duration
        });
    }

    tick(){
        this.setState({
            ...this.state,
            timer: this.state.timer - 1
        })
    }

    render(){
        if(this.state.index !== this.props.books.length){
            return(
                <div>
                    <h2>Book Recommendation</h2>
                    <p>Add {this.props.books[this.state.index].title} to your reading list</p>
                    <p>Next recommendation in {this.state.timer} seconds or <button onClick={this.next.bind(this)}>Skip</button></p>
                </div>
            )
        } else {
            return null;
        }
    }
};

export default recommendation;