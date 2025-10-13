import { saveToLocalStorage } from "../helpers";
import { useHistory } from "../hooks/useHistory";
import FlightDisplay, { type FlightDetailsProps } from "./FlightDisplay";
import HotelDisplay, { type HotelProps } from "./HotelDisplay";
import ItemDisplay, { type ItemProps } from "./ItemDisplay";
import ItineraryDisplay, { type ItineraryItem } from "./itineraryDisplay";
import ListDisplay from "./ListDisplay";

export interface SummaryProps {
  destination: string;
  estimate_costs: string;
  flight_options: FlightDetailsProps;
  hotels: HotelProps[];
  itinerary: ItineraryItem[];
  packing_list: ItemProps[];
  travel_tips: string[];
}

const TravelSummaryDisplay = ({
  summary = {
    destination: "",
    estimate_costs: "",
    flight_options: {} as FlightDetailsProps,
    hotels: [],
    itinerary: [],
    packing_list: [],
    travel_tips: [],
  },
}: {
  summary: SummaryProps;
}) => {
  useHistory();

  if (Object.keys(summary || {}).length === 0) {
    return null;
  }

  // const handleDownload = () => {
  //   console.log("Download PDF clicked");
  //   const element = document.getElementById("content-to-print");
  //   console.log(element);
  //   if (element) {
  //     html2pdf().from(element).save("TravelSummary.pdf");
  //     console.log("done");
  //   } else {
  //     console.error("Element with id 'content-to-print' not found.");
  //   }
  // };

  return (
    <div className="p-2 border-t-1 flex flex-col gap-4" id="content-to-print">
      <div onClick={() => saveToLocalStorage()}>Save</div>
      <h3 className="text-2xl font-bold text-gray-900">
        You Detailed Travel Plan
      </h3>
      <span className="italic">Estimate Cost: {summary?.estimate_costs}</span>

      <FlightDisplay
        flightDetails={summary?.flight_options}
        heading="Flights"
      />

      <h3 className="text-lg font-bold text-gray-900 dark:text-secondaryColor">
        Best Hotels
      </h3>
      {summary?.hotels.map((hotel) => (
        <HotelDisplay hotel={hotel} />
      ))}
      <ItineraryDisplay
        itinerary={summary?.itinerary}
        heading="Your Day Plan"
      />
      <ItemDisplay
        itemList={summary?.packing_list}
        heading="Packing check list: "
      />
      <ListDisplay heading={"Travel Tips: "} list={summary?.travel_tips} />
    </div>
  );
};

export default TravelSummaryDisplay;
