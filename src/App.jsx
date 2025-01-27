import { useReducer } from "react"
import { ACTIONS, formart, reducer } from "./utils/calUtils";
import BtnOp from "./components/BtnOp";
import BtnNum from "./components/BtnNum";

function App() {

  const[{curOperation, prevOperation, operation}, dispatch] = useReducer(reducer, {});

  return (
    <>
      <div className="grid gridPersonalizeRow gridPersonalizeCol lg:border-y-[50px] border-y-[25px] lg:border-x-[30px] border-x-[15px] rounded-xl bg-black shadow-2xl gap-1 lg:gap-5">
        <div className="col-span-4 bg-[#a2bf51] flex flex-col items-end justify-around p-2 break-all rounded-md">
          <div className="text-[#ffffffa3] md:text-md text-sm">{formart(prevOperation)} {operation}</div>
          <div className="text-white sm:text-4xl text-2xl">{formart(curOperation) || "" }</div>
        </div>
        <button onClick={() => dispatch({type: ACTIONS.CLEAR})} className="btn-big sm:text-3xl md:text-xl bg-[#b3b3b3] text-white sm:inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in">AC</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})} className="sm:text-3xl md:text-xl bg-[#cc2d43] text-white sm:inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in">C</button>
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
        <button onClick={() => dispatch({type: ACTIONS.EVALUATE})} className="btn-big sm:text-3xl md:text-xl bg-[#f8a13a] text-white sm:inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in">=</button>
      </div>
    </>
  )
}

export default App
