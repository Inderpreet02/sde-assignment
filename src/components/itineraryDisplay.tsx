import LocationDisplay, { type PlaceProps } from "./LocationDisplay";

export interface ItineraryItem {
  day: string;
  day_plan: string;
  best_time_to_visit_day?: string;
  activities?: PlaceProps[];
}

const ItineraryDisplay = ({
  heading = "",
  itinerary = [] as ItineraryItem[],
}) => {
  return (
    <div>
      {heading && (
        <h2 className="mb-2 text-lg font-bold text-gray-900">{heading}</h2>
      )}
      <div>
        {itinerary.map((data, index) => (
          <div className="mb-4 flex flex-col gap-2" key={data?.day + index}>
            <h2 className="text-2xl">📅 Day: {data?.day}</h2>
            <div>{data?.day_plan}</div>
            <div className="italic text-sm text-gray-500">
              {data?.best_time_to_visit_day}
            </div>

            <div>
              {data?.activities?.map((place) => (
                <LocationDisplay place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryDisplay;
