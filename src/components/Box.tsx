import BoxDetails from "../types/box";
import BoxTooltip from "./BoxTooltip";

type BoxProps = {
   onMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void
  onMouseEnter: (index: number) => void
  isSelected: boolean;
  details: BoxDetails;
};

const Box = ({ details, isSelected, onMouseDown, onMouseEnter }: BoxProps) => {
  return (
    <BoxTooltip details={details}>
      <div
        onMouseDown={(e)=>onMouseDown(e, details.serialNumber)}
        onMouseEnter={()=>onMouseEnter(details.serialNumber)}
        className={`w-5 h-5 transition rounded-sm hover:cursor-pointer hover:scale-150 hover:bg-blue-500 ${
          isSelected
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
