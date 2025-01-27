import React from 'react'

const BtnCalc = ({numCalc, isBig}) => {
  return (
    <div className={`${isBig ? "btn-big" : "btn-normal" }`} >{numCalc}</div>
  )
}

export default BtnCalc