import LifeEvent from "./lifeEvent";
import LifeUnit from "./lifeUnit";

type BoxDetails = {
  index: number;
  unit: LifeUnit;
  isCompleted: boolean;
  events: LifeEvent[];
  isSelected: boolean;
};

export default BoxDetails;
