import { useEffect } from "react";
import useAppDispatch from "../../redux/hooks/useAppDispatch";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { homeActions, homeState } from "../../redux/reducers/homeSlice";
import LifeUnit from "../../types/lifeUnit";
import Input from "../Input";
import Label from "../Label";

const ConfigInput = () => {
  const dispatch = useAppDispatch();
  const {
    config: { dateOfBirth, lifeExpectancyInYears, unit },
  } = useAppSelector(homeState);
  
  useEffect(() => {
    dispatch(homeActions.updateUnit("year"));
  }, []);

  return (
    <section>
      <div>
        <Label htmlFor="unit">Your life in</Label>
        <select
          name="unit"
          id="unit"
          value={unit}
          onChange={(e) => {
            dispatch(homeActions.updateUnit(e.target.value as LifeUnit));
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
        value={lifeExpectancyInYears}
        min={60}
        max={100}
        onChange={(event) => {
          const inputMaxAge = event.target.valueAsNumber;
          dispatch(homeActions.updateLifeExpectancy(inputMaxAge));
        }}
      />
      <Input
        label="Enter date of birth"
        type="date"
        name="dob"
        id="dob"
        value={dateOfBirth}
        onChange={(event) => {
          const inputDob = event.target.valueAsDate;
          if (inputDob !== null) {
            dispatch(homeActions.updateDateOfBirth(inputDob));
          }
        }}
      />
    </section>
  );
};
export default ConfigInput;
