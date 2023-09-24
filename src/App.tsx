import { useState } from "react";
import "./App.css";
import Boxes from "./components/Boxes";
import LifeUnit from "./types/lifeUnit";

function App() {
  const [maxAge, setMaxAge] = useState<number>(90);
  const [dob, setDob] = useState<Date>(new Date());
  const [lifeUnit, setLifeUnit] = useState<LifeUnit>("year");

  const numberOfBoxes =
    lifeUnit === "year"
      ? maxAge
      : lifeUnit === "month"
      ? maxAge * 12
      : maxAge * 52;
  const numberOfUnitsPerRow = lifeUnit === 'year' ? 10 : lifeUnit==='month' ? 36 : 52
  const diffTime = Math.abs(Date.now() - dob.valueOf())
  const diffDays = Math.ceil(diffTime/(1000 * 60 *60 *24))

  const numberOfUnitsCompleted =  lifeUnit === "year"
      ? diffDays/365
      : lifeUnit === "month"
      ? diffDays/31
      : diffDays/7;

  return (
    <>
      <h1>Life visualizer</h1>
      <div className="py-5">
        <div>
          Your life in
          <select
            name="timeframe"
            id=""
            value={lifeUnit}
            onChange={(e) => {
              setLifeUnit(e.target.value as LifeUnit);
            }}
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="week">Week</option>
          </select>
        </div>
        <div>
          <label htmlFor="maxAge">Enter max age</label>
          <input
            type="number"
            name="maxAge"
            id="maxAge"
            value={maxAge}
            min={60}
            onChange={(event) => {
              const inputMaxAge = event.target.valueAsNumber;
              setMaxAge(inputMaxAge);
              console.log(inputMaxAge);
            }}
          />
        </div>

        <div>
          <label htmlFor="dob">Enter date of birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            onChange={(event) => {
              const inputDob = event.target.valueAsDate;
              if (inputDob !== null) {
                setDob(inputDob);
              }
            }}
          />
        </div>
      </div>
     <Boxes numberOfUnitsPerRow={numberOfUnitsPerRow} numberOfUnitsCompleted={numberOfUnitsCompleted} numberOfBoxes={numberOfBoxes} unit={lifeUnit}/>
    </>
  );
}

export default App;
