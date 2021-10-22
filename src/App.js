import Greeting from "./Greeting/Greeting";
import Counter from "./Counter/Counter";
// import mapping from './mapping/mapping';
import './App.css'
function App(){
  return(
    <div className="App">
<h1>Hello</h1>
<Greeting />
<Counter startingCount={7}/>


    </div>
  )
}
export default App;