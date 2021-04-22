
import React from 'react';



class Clock extends React.Component{
    state: {date: Date};
    timerID!: NodeJS.Timeout;

    constructor(props: any) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}


export default Clock;