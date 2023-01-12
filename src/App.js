
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {incrementAction,decrementAction,multipicationAction,divideAction} from './actions/Action.js'

function App() {
  const mystate = useSelector((state)=>state.reducerFunction)
    console.log(mystate);
  const dispatch = useDispatch()
  return (
    <div className="App">
          <h4>{mystate}</h4>
           React/Redux
           <br/>
           <button type="button"onClick={()=>{dispatch(decrementAction)}}>-</button>
           <button type="button"onClick={()=>{dispatch(multipicationAction)}}>*</button>
           <input  type="text" className="input_class" value={mystate}/>
           <button type="button" onClick={()=>{dispatch(incrementAction)}}>+</button>
           <button type="button" onClick={()=>{dispatch(divideAction)}}>/</button>
    </div>
    
  );
}

export default App;
