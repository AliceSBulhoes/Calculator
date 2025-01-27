import React from 'react'
import { ACTIONS } from '../utils/calUtils'

const BtnNum = ({numCalc, dispatch}) => {
  return (
    <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {numCalc}})} className={`sm:inset-shadow-sm bg-black inset-shadow-gray-600" sm:text-3xl text-xl text-white inset-shadow-gray-700 rounded-2xl sm:shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in`} >{numCalc}</button>
  )
}

export default BtnNum