import BtnCalc from "./components/BtnCalc"

function App() {
  return (
    <>
      <div className="container-calc">
        <div className="output">
          <div className="prev-operation"></div>
          <div className="current-operation"></div>
        </div>
        <BtnCalc isBig numCalc="AC" />
        <BtnCalc numCalc="DEL" />
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
