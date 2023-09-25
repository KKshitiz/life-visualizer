import BoxDetails from "../types/box";
import BoxTooltip from "./BoxTooltip";

type BoxProps = {
   onMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void
  onMouseEnter: (index: number) => void
  details: BoxDetails;
};

const Box = ({ details,  onMouseDown, onMouseEnter }: BoxProps) => {
  return (
    <BoxTooltip details={details}>
      <div
        onMouseDown={(e)=>onMouseDown(e, details.index)}
        onMouseEnter={()=>onMouseEnter(details.index)}
        className={`${details.unit==='year'? 'w-5': 'w-2'} aspect-square transition rounded-sm hover:cursor-pointer hover:scale-150 hover:bg-blue-500 ${
          details.isSelected
            ? "bg-blue-800"
            : details.events.length !== 0
            ? "bg-yellow-100"
            : details.isCompleted
            ? "bg-blue-500"
            : "bg-white"
        }`}
      />
    </BoxTooltip>
  );
};
export default Box;
