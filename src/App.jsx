import BtnCalc from "./components/BtnCalc"

function App() {
  return (
    <>
      <div className="grid gridPersonalizeRow gridPersonalizeCol border-y-[50px] border-x-[30px] rounded-md bg-black gap-5 shadow-2xl">
        <div className="col-span-4 bg-[#a2bf51] flex flex-col items-end justify-center p-2 break-all rounded-md">
          <div className="text-[#ffffff88] text-md">1111 x</div>
          <div className="text-white text-4xl">111</div>
        </div>
        <BtnCalc isBig numCalc="AC" />
        <BtnCalc numCalc="C" />
        <BtnCalc numCalc="%" />
        <BtnCalc numCalc="1" />
        <BtnCalc numCalc="2" />
        <BtnCalc numCalc="3" />
        <BtnCalc numCalc="X" />
        <BtnCalc numCalc="4" />
        <BtnCalc numCalc="5" />
        <BtnCalc numCalc="6" />
        <BtnCalc numCalc="+" />
        <BtnCalc numCalc="7" />
        <BtnCalc numCalc="8" />
        <BtnCalc numCalc="9" />
        <BtnCalc numCalc="-" />
        <BtnCalc numCalc="," />
        <BtnCalc numCalc="0" />
        <BtnCalc isBig numCalc="=" />
      </div>
    </>
  )
}

export default App
