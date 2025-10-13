import SelectionTab from "./SelectionTab";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import RedirectNudge from "./RedirectNudge";
import { FLIGHTS_URL } from "../constants";

export interface FlightDetailsProps {
  flight_from: string;
  flight_to: string;
}

const FlightDisplay = ({
  flightDetails = { flight_from: "", flight_to: "" },
  heading,
}: {
  flightDetails: FlightDetailsProps;
  heading: string;
}) => {
  const { flight_from, flight_to } = flightDetails;
  const redirectUrl = new URL(
    FLIGHTS_URL + `?q=flights from ${flight_from} to ${flight_to}`
  );
  return (
    <div>
      {heading && (
        <h2 className="mb-2 text-lg font-bold text-gray-900 dark:secondaryColor">
          {heading}
        </h2>
      )}

      <div className="flex items-center gap-4">
        <div>
          <SelectionTab text={flight_from} Icon={FaPlaneDeparture} />
        </div>
        <HiOutlineSwitchHorizontal />
        <div>
          <SelectionTab text={flight_to} Icon={FaPlaneArrival} />
        </div>
      </div>

      <RedirectNudge text="See Flights" href={redirectUrl.toString()} />
    </div>
  );
};

export default FlightDisplay;
