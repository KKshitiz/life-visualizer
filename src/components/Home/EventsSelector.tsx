import useAppDispatch from "../../redux/hooks/useAppDispatch";
import useAppSelector from "../../redux/hooks/useAppSelector";
import { homeActions, homeState } from "../../redux/reducers/homeSlice";
import Input from "../Input";

const EventsSelector = () => {
  const dispatch = useAppDispatch();
  const {
    events: { famousDeaths, scientificBreakthroughs },
  } = useAppSelector(homeState);

  return (
    <section className="p-3">
		<h2>Show events</h2>
      <Input
        label="Famous deaths"
        type="checkbox"
        name="famousDeaths"
        checked={famousDeaths}
        onChange={() => dispatch(homeActions.toggleFamousDeathEvents())}
      />
      <Input
        label="Scientific breakthroughs"
        type="checkbox"
        name="scientificBreakthroughs"
        checked={scientificBreakthroughs}
        onChange={() => dispatch(homeActions.toggleScientificBreakthroughEvents())}
      />
    </section>
  );
};
export default EventsSelector;
