import LifeEvent from "./lifeEvent";
import LifeUnit from "./lifeUnit";

type BoxDetails = {
  serialNumber: number;
  unit: LifeUnit;
  isCompleted: boolean;
  events: LifeEvent[];
};

export default BoxDetails;
