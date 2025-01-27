import React from 'react'

const BtnCalc = ({numCalc, isBig, isNum, isClear}) => {
  return (
    <button className={`inset-shadow-sm ${isBig ? "btn-big" : "" } ${isNum ? "bg-black inset-shadow-gray-600" : isClear ? "bg-[#cc2d43]" : numCalc == "=" ? "bg-[#f8a13a]" : "bg-[#b3b3b3]"} text-3xl text-white inset-shadow-sm inset-shadow-gray-700 rounded-2xl shadow-md shadow-gray-900 hover:inset-shadow-gray-900 hover:shadow-black duration-250 hover:scale-98 ease-in`} >{numCalc}</button>
  )
}

export default BtnCalc