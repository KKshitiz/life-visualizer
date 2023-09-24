import { useState } from "react";
import "./App.css";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
import Input from "./components/Input";
import LifeUnit from "./types/lifeUnit";

function App() {
  const [maxAge, setMaxAge] = useState<number>(90);
  const [dob, setDob] = useState<Date>(new Date());
  const [lifeUnit, setLifeUnit] = useState<LifeUnit>("year");
  const [showFamousDeaths, setShowFamousDeaths] = useState<boolean>(false);

  const numberOfBoxes =
    lifeUnit === "year"
      ? maxAge
      : lifeUnit === "month"
      ? maxAge * 12
      : maxAge * 52;
  const numberOfUnitsPerRow =
    lifeUnit === "year" ? 10 : lifeUnit === "month" ? 36 : 52;
  const diffTime = Math.abs(Date.now() - dob.valueOf());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const numberOfUnitsCompleted =
    lifeUnit === "year"
      ? diffDays / 365
      : lifeUnit === "month"
      ? diffDays / 31
      : diffDays / 7;

  return (
    <>
      <div className="flex flex-col flex-grow items-center">
        <h1>Life visualizer</h1>
        <div className="py-5">
          <form onSubmit={(e) => e.preventDefault()}>
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
            <Input
              label="Life expectancy"
              type="number"
              name="maxAge"
              value={maxAge}
              min={60}
              max={100}
              onChange={(event) => {
                const inputMaxAge = event.target.valueAsNumber;
                setMaxAge(inputMaxAge);
                console.log(inputMaxAge);
              }}
            />
            <Input
              label="Enter date of birth"
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
            <Input
              label="Famous deaths"
              type="checkbox"
              name="famousDeaths"
              id="famousDeaths"
              checked={showFamousDeaths}
              onChange={() => setShowFamousDeaths((current) => !current)}
            />
          </form>
        </div>
        <Boxes
          numberOfUnitsPerRow={numberOfUnitsPerRow}
          numberOfUnitsCompleted={numberOfUnitsCompleted}
          numberOfBoxes={numberOfBoxes}
          unit={lifeUnit}
          showFamousDeaths={showFamousDeaths}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
