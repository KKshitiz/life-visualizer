import BoxDetails from "../types/box";
import BoxTooltip from "./BoxTooltip";

type BoxProps = {
  details: BoxDetails;
};

const Box = ({ details }: BoxProps) => {
  return (
    <BoxTooltip details={details}>
      <div
        className={`w-5 h-5 transition rounded-sm hover:cursor-pointer hover:scale-150 hover:bg-blue-500 ${
          details.events.length !== 0
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
