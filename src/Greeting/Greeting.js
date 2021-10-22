import react, { Component } from 'react';
import './Greeting.css';
class Greeting extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"", 
            city:"",
        
        };
    }
      change=(event)=>{
this.setState({
    name: event.target.value
});
// console.log("value", this.state.name)

      }
      changeOne=(event)=>{
        this.setState({
            city: event.target.value
        });
        // console.log("value", this.state.city)
        
              }
              
submitForm=(event)=>{
            event.preventDefault();
            console.log("value", this.state.city)
            console.log("value", this.state.name)


    }

      render(){
        return(
            <form onSubmit={this.submitForm}>
            
    <input type= "text" value= {this.state.name} onChange={this.change}/>
    <input type= "text" value= {this.state.city} onChange={this.changeOne}/>
    <input type="submit"/>


            </form>
            
      );
      }
      
    
}export default Greeting;