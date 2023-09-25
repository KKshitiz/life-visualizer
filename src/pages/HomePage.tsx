import { useState } from "react";
import Boxes from "../components/Boxes";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Modal from "../components/Modal";
import LifeUnit from "../types/lifeUnit";
import LocalStorageService from "../utils/localStorageService";

const HomePage = () => {
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(false);
  const [maxAge, setMaxAge] = useState<number>(90);
  const [dob, setDob] = useState<Date>(
    LocalStorageService.getDateOfBirth() ?? new Date()
  );
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
  const elapsedTimeInMs = Math.abs(Date.now() - dob.valueOf());
  const elapsedDays = Math.ceil(elapsedTimeInMs / (1000 * 60 * 60 * 24));

  const numberOfUnitsCompleted =
    lifeUnit === "year"
      ? elapsedDays / 365
      : lifeUnit === "month"
      ? elapsedDays / 31
      : elapsedDays / 7;

  return (
    <>
      <Modal isOpen={isTutorialOpen} onClose={() =>setIsTutorialOpen(false)}>
       Introduction
       <div>
        <Button>Skip</Button>
       </div>
      </Modal>
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
              value={dob.toISOString().split("T")[0]}
              onChange={(event) => {
                console.log(event.target.value);

                const inputDob = event.target.valueAsDate;
                if (inputDob !== null) {
                  setDob(inputDob);
                  LocalStorageService.saveDateOfBirth(inputDob);
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
      <div className="fixed right-7 bottom-7 bg-gray-900 rounded-full w-12 aspect-square text-2xl flex justify-center items-center shadow-sm shadow-slate-800 hover:cursor-pointer hover:scale-125 transition-all hover:shadow-yellow-100" onClick={()=>setIsTutorialOpen(true)}>
        💡
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
