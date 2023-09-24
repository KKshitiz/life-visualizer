import famousDeaths from "../constants/famousDeaths";
import LifeEvent from "../types/lifeEvent";
import LifeUnit from "../types/lifeUnit";
import { convertLifeEventToUnit } from "../utils/dateToLifeConverter";
import Box from "./Box";

const Boxes = ({
  numberOfUnitsPerRow,
  numberOfUnitsCompleted,
  numberOfBoxes,
  unit
}: {
  numberOfUnitsPerRow: number;
  numberOfUnitsCompleted: number;
  numberOfBoxes: number;
  unit: LifeUnit
}) => {
  const boxes = new Array(numberOfBoxes).fill(null);

  const className =
    numberOfUnitsPerRow === 10
      ? "grid grid-cols-10 gap-3"
      : numberOfUnitsPerRow === 36
      ? "grid grid-cols-36 gap-3"
      : "grid grid-cols-52 gap-3";

  const serialNumberEvents =new  Map<number, LifeEvent[]>();

  famousDeaths.forEach((deathEvent)=> {
    const serialNumber = convertLifeEventToUnit(deathEvent, unit);
    const existingEvents = serialNumberEvents.get(serialNumber)
    if(existingEvents!==undefined){
      serialNumberEvents.set(serialNumber, [...existingEvents, deathEvent]) 
    }else{
      serialNumberEvents.set(serialNumber, [ deathEvent]) 
    }
  })

  console.log(serialNumberEvents)

  return (
    <div>
      <h3>Years</h3>
      <div className="flex">
        <h3 className="rotate-90">Your age</h3>
        <div className={className}>
          {boxes.map((_, index) => (
           <Box key={index} details={{events: serialNumberEvents.get(index+1)?? [], isCompleted: index < numberOfUnitsCompleted, serialNumber: index, unit: unit}}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
