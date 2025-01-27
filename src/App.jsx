import { useReducer } from "react"
import { ACTIONS, reducer } from "./utils/calUtils";
import BtnOp from "./components/BtnOp";
import BtnNum from "./components/BtnNum";

function App() {

  const[{curOperation, prevOperation, operation}, dispatch] = useReducer(reducer, {});

  return (
    <>
      <div className="grid gridPersonalizeRow gridPersonalizeCol border-y-[50px] border-x-[30px] rounded-xl bg-black gap-5 shadow-2xl">
        <div className="col-span-4 bg-[#a2bf51] flex flex-col items-end justify-around p-2 break-all rounded-md">
          <div className="text-[#ffffffa3] text-md">{prevOperation} {operation}</div>
          <div className="text-white text-4xl">{curOperation || "" }</div>
        </div>
        <button onClick={() => dispatch({type: ACTIONS.CLEAR})} className="btn-big text-3xl bg-[#b3b3b3] text-white inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in">AC</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})} className="text-3xl bg-[#cc2d43] text-white inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in">C</button>
        <BtnOp opCalc="%" dispatch={dispatch}/>
        <BtnNum isNum numCalc="1" dispatch={dispatch}/>
        <BtnNum isNum numCalc="2" dispatch={dispatch}/>
        <BtnNum isNum numCalc="3" dispatch={dispatch}/>
        <BtnOp opCalc="x" dispatch={dispatch}/>
        <BtnNum isNum numCalc="4" dispatch={dispatch}/>
        <BtnNum isNum numCalc="5" dispatch={dispatch}/>
        <BtnNum isNum numCalc="6" dispatch={dispatch}/>
        <BtnOp opCalc="+" dispatch={dispatch}/>
        <BtnNum isNum numCalc="7" dispatch={dispatch}/>
        <BtnNum isNum numCalc="8" dispatch={dispatch}/>
        <BtnNum isNum numCalc="9" dispatch={dispatch}/>
        <BtnOp opCalc="-" dispatch={dispatch}/>
        <BtnNum numCalc="." dispatch={dispatch}/>
        <BtnNum isNum numCalc="0" dispatch={dispatch}/>
        <button onClick={() => dispatch({type: ACTIONS.EVALUATE})} className="btn-big text-3xl bg-[#f8a13a] text-white inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in">=</button>
      </div>
    </>
  )
}

export default App
