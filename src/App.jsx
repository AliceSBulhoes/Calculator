import BtnCalc from "./components/BtnCalc"

function App() {
  return (
    <>
      <div className="grid gridPersonalizeRow gridPersonalizeCol border-y-[50px] border-x-[30px] rounded-xl bg-black gap-5 shadow-2xl">
        <div className="col-span-4 bg-[#a2bf51] flex flex-col items-end justify-center p-2 break-all rounded-md">
          <div className="text-[#ffffffa3] text-md">1111 x</div>
          <div className="text-white text-4xl">111</div>
        </div>
        <BtnCalc isBig numCalc="AC" />
        <BtnCalc isClear numCalc="C" />
        <BtnCalc numCalc="%" />
        <BtnCalc isNum numCalc="1" />
        <BtnCalc isNum numCalc="2" />
        <BtnCalc isNum numCalc="3" />
        <BtnCalc numCalc="x" />
        <BtnCalc isNum numCalc="4" />
        <BtnCalc isNum numCalc="5" />
        <BtnCalc isNum numCalc="6" />
        <BtnCalc numCalc="+" />
        <BtnCalc isNum numCalc="7" />
        <BtnCalc isNum numCalc="8" />
        <BtnCalc isNum numCalc="9" />
        <BtnCalc numCalc="-" />
        <BtnCalc numCalc="," />
        <BtnCalc isNum numCalc="0" />
        <BtnCalc isBig numCalc="=" />
      </div>
    </>
  )
}

export default App
