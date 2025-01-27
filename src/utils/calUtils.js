
export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evauate'
}

export const evaluate = ({curOperation, prevOperation, operation}) => {
    const prev = parseFloat(prevOperation)
    const cur = parseFloat(curOperation)

    if(isNaN(prev) || isNaN(cur)) return ""

    let computation = ""
    switch(operation){
        case "+":
            computation = prev + cur
            break
        case "-":
            computation = prev - cur
            break
        case "x":
            computation = prev * cur
            break
         case "%":
            computation = prev / cur
            break   
    }

    return computation.toString();
}

export const reducer = (state, { type, payload }) => {
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(payload.numCalc === "0" && state.curOperation === "0") return state
            if(payload.numCalc === "." && state.curOperation.includes(".")) return state;
            return {
                ...state,
                curOperation: `${state.curOperation || "" }${payload.numCalc}`,
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.curOperation == null && state.prevOperation === null){
                return state
            }

            console.log(state.curOperation)
            if(state.prevOperation == null){
                return{
                    ...state,
                    operation: payload.opCalc,
                    prevOperation: state.curOperation,
                    curOperation: null,
                }
            }

            return {
                ...state,
                prevOperation: evaluate(state),
                operation: payload.opCalc,
                curOperation: null
            }
        case ACTIONS.CLEAR:
            return {}
    }
}