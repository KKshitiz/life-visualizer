import { useState } from "react";
import Events from "../constants/events";
import LifeEvent from "../types/lifeEvent";
import LifeUnit from "../types/lifeUnit";
import { convertLifeEventToUnit } from "../utils/dateToLifeConverter";
import Box from "./Box";

type BoxesProps = {
  numberOfUnitsPerRow: number;
  numberOfUnitsCompleted: number;
  numberOfBoxes: number;
  unit: LifeUnit;
  showFamousDeaths: boolean;
};

const Boxes = ({
  numberOfUnitsPerRow,
  numberOfUnitsCompleted,
  numberOfBoxes,
  unit,
  showFamousDeaths,
}: BoxesProps) => {
  const [selectedBoxIndexes, setSelectedBoxIndexes] = useState<{
    start: number, end: number
  }>({start: 0, end: 0});
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const boxes = new Array(numberOfBoxes).fill(null);

  const className =
    numberOfUnitsPerRow === 10
      ? "grid grid-cols-10 gap-1"
      : numberOfUnitsPerRow === 36
      ? "grid grid-cols-36 gap-1"
      : "grid grid-cols-52 gap-1";

  const serialNumberEvents = new Map<number, LifeEvent[]>();

  if (showFamousDeaths) {
    addEventsToVisualizer(serialNumberEvents, Events.famousDeaths, unit);
    console.log('add famous deaths')
  }
  addEventsToVisualizer(
    serialNumberEvents,
    Events.scientificBreakthroughs,
    unit
  );

  console.log(serialNumberEvents);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    setIsMouseDown(true);
    setSelectedBoxIndexes({start: index, end: index});
  };

  const handleMouseEnter = (index: number) => {
    if (isMouseDown) {
        setSelectedBoxIndexes((prev)=>{
          return index<prev.start? {start: index, end: prev.end}:{start: prev.start, end: index}
        });
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div>
      <h3>Years</h3>
      <div className="flex items-center">
        <h3 className="rotate-90 origin-top-left whitespace-nowrap text-center w-1">
          Your age
        </h3>
        <div className={className} onMouseUp={handleMouseUp}>
          {boxes.map((_, index) => (
            <Box
              key={index}
              details={{
                events: serialNumberEvents.get(index + 1) ?? [],
                isCompleted: index < numberOfUnitsCompleted,
                serialNumber: index,
                unit: unit,
              }}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
              isSelected={index>=selectedBoxIndexes.start && index<=selectedBoxIndexes.end}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;

function addEventsToVisualizer(
  map: Map<number, LifeEvent[]>,
  events: LifeEvent[],
  unit: LifeUnit
) {
  events.forEach((event) => {
    const serialNumber = convertLifeEventToUnit(event, unit);
    const existingEvents = map.get(serialNumber);
    if (existingEvents !== undefined) {
      map.set(serialNumber, [...existingEvents, event]);
    } else {
      map.set(serialNumber, [event]);
    }
  });
}
