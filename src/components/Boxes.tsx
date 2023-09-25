import { useState } from "react";
import useAppDispatch from "../redux/hooks/useAppDispatch";
import useAppSelector from "../redux/hooks/useAppSelector";
import { homeActions, homeState } from "../redux/reducers/homeSlice";
import Box from "./Box";

const Boxes = () => {
  const dispatch = useAppDispatch();
  const {
    boxes: {
      details,
      perRow,
      selection: { startIndex, endIndex },
    },
  } = useAppSelector(homeState);

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const className =
    perRow === 10
      ? "grid grid-cols-10 gap-1"
      : perRow === 36
      ? "grid grid-cols-36 gap-1"
      : "grid grid-cols-52 gap-1";

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    setIsMouseDown(true);
    dispatch(
      homeActions.updateSelectBoxes({ startIndex: index, endIndex: index })
    );
  };

  const handleMouseEnter = (index: number) => {
    if (isMouseDown) {
      dispatch(
        homeActions.updateSelectBoxes(
          index < startIndex
            ? { startIndex: index, endIndex }
            : { startIndex, endIndex: index }
        )
      );
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
          {details.map((boxDetails) => (
            <Box
              key={boxDetails.index}
              details={boxDetails}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;


