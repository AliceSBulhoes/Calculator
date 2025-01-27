
export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evauate'
}

export const INT_FORMART = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
})

export const formart = (operand) => {
    if(operand == null){
        return
    } else {
        const[int, decimal] = operand.split(".")

        if(decimal == null) {
            return INT_FORMART.format(int)
        } else{
            return `${INT_FORMART.format(int)}.${decimal}`
        }
    }
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
            if(state.overwrite){
                return {
                    ...state,
                    curOperation: payload.numCalc,
                    overwrite:false
                }
            }
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

            if(state.curOperation == null){
                return {
                    ...state,
                    operation: payload.opCalc
                }
            }

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
        case ACTIONS.EVALUATE:
            if(state.operation == null || state.curOperation == null || state.prevOperation == null){
                return state
            } else{
                return {
                    ...state,
                    overwrite: true,
                    prevOperation: null,
                    curOperation: evaluate(state),
                    operation: null,
                }
            }
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return {
                    ...state,
                    overwrite: false,
                    curOperation: null
                }
            } else if(state.curOperation == null) {
                return state
            } else if(state.curOperation.length === 1){
                return {
                    ...state,
                    curOperation: null
                }
            } else {
                return {
                    ...state,
                    curOperation: state.curOperation.slice(0,-1)
                }
            }
        case ACTIONS.CLEAR:
            return {}
    }
}