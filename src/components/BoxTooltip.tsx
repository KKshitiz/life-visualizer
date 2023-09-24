import BoxDetails from "../types/box";

type TooltipProps = {
  details: BoxDetails;
  children: React.ReactNode;
};

const BoxTooltip = ({ details, children }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <div className="hidden transition-opacity duration-500 w-32 group-hover:flex-col group-hover:flex absolute left-3 bottom-5 z-10 mt-2">
        <div className="min-w-max bg-blue-800 p-2 rounded-t-lg">
          {details.unit} {details.serialNumber + 1}
        </div>
        <div className="bg-gray-800 p-2 rounded-b-rounded-t-lg">
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
