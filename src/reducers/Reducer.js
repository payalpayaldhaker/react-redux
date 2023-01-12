
const ininitialState = 0;
const reducerFunction = (state =ininitialState,action)=>{ 
        switch(action.type){ 
            case "INCREMENT":
            return state + 1;
            case "DECREMENT":
            return state - 1;
            case "MULTIPICATION":
            return state * 2;
            case "DIVIDE":
            return state / 2;
            default : return state
        }
}
export default reducerFunction;