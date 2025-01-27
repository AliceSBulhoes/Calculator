import React from 'react'
import { ACTIONS } from '../utils/calUtils'

const BtnOp = ({opCalc, isBig, isClear, dispatch}) => {

  return (
    <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {opCalc}})} className={`bg-[#b3b3b3] sm:text-3xl text-xl text-white sm:inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in`} >{opCalc}</button>
  )
}

export default BtnOp