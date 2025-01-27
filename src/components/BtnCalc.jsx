import React from 'react'

const BtnCalc = ({numCalc, isBig, isNum, isClear}) => {
  return (
    <button className={`inset-shadow-sm ${isBig ? "btn-big" : "" } ${isNum ? "bg-black inset-shadow-gray-600" : isClear ? "bg-[#cc2d43]" : numCalc == "=" ? "bg-[#f8a13a]" : "bg-[#b3b3b3]"} text-3xl text-white inset-shadow-sm inset-shadow-gray-800 rounded-2xl`} >{numCalc}</button>
  )
}

export default BtnCalc