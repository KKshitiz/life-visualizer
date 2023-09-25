import useAppDispatch from "../../redux/hooks/useAppDispatch";
import { homeActions } from "../../redux/reducers/homeSlice";

const TutorialButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="fixed right-7 bottom-7 bg-gray-900 rounded-full w-12 aspect-square text-2xl flex justify-center items-center shadow-sm shadow-slate-800 hover:cursor-pointer hover:scale-125 transition-all hover:shadow-yellow-100"
      onClick={() => dispatch(homeActions.toggleTutorialDialog())}
    >
      💡
    </div>
  );
};
export default TutorialButton;
