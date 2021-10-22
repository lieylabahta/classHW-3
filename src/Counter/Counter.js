import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component{
constructor(props){
    super(props);
    console.log(this)
    this.state={
        count: this.props.startingCount

    }
this.add= this.add.bind(this);
}
add(){
    console.log(this.state)
    this.setState({
       count: this.state.count +1
    });
}
componentDidMount(){
    console.log("Mounted")
}
componentDidUpdate(){
    console.log("Updated")
}


    render(){
console.log("Re-render")
        return(
    <div id="Counter">
        <h1><button onClick={this.add}>Increase</button></h1>
        <h2>{this.state.count}</h2>
    </div>
    )
    }
}
export default Counter;