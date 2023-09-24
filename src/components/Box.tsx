import BoxDetails from "../types/box";
import BoxTooltip from "./BoxTooltip";

type BoxProps = {
	details: BoxDetails
}

const Box = ({details}: BoxProps)=> {
return <BoxTooltip details={details}>
            <div
              className={`w-3 h-3 rounded-sm hover:cursor-pointer hover:bg-blue-500 ${
               details.events.length!==0 ? 'bg-yellow-100': details.isCompleted ? "bg-blue-500" : "bg-white"
              }`}
            >
            </div>
                </BoxTooltip>;
};
export default Box;