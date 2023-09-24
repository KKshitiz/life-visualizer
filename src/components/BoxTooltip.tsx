import BoxDetails from "../types/box";

type TooltipProps = {
  details: BoxDetails;
  children: React.ReactNode;
};

const BoxTooltip = ({ details, children }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <div className="hidden w-52 transition-opacity duration-500 group-hover:flex-col group-hover:flex absolute left-3 bottom-5 z-10 mt-2">
        <div className="bg-blue-800 p-2 rounded-t-lg">
          {details.unit} {details.serialNumber + 1}
        </div>
        <div className="bg-gray-800 p-2 rounded-b-lg">
          <ul>
            {details.events.map((event) => (
              <li key={event.contents}>{event.contents}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BoxTooltip;
