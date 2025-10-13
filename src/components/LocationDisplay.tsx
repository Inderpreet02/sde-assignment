import { MAPS_URL } from "../constants";
import RedirectNudge from "./RedirectNudge";

export interface PlaceProps {
  place_name: string;
  place_details?: string;
  place_address?: string;
  ticket_pricing?: string;
  time_travel_each_location?: string;
  place_image_url?: string;
  geo_coordinates?: {
    latitude: number;
    longitude: number;
  };
}

const LocationDisplay = ({ place }: { place: PlaceProps }) => {
  const redirectUrl = new URL(
    MAPS_URL +
      `${place?.geo_coordinates?.latitude},${place?.geo_coordinates?.longitude}`
  );
  return (
    <div
      className="flex justify-between border p-2 my-2 rounded-md gap-2"
      key={place?.place_name}
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 ">
          {place?.place_name}
        </h3>
        <div className="italic text-sm text-gray-500">
          {place?.place_details}
        </div>
        <div className="text-sm">Address: {place?.place_address}</div>

        <div className="text-sm">Ticket Pricing: {place?.ticket_pricing}</div>
        <div className="text-sm">
          Time to travel each location: {place?.time_travel_each_location}
        </div>
        <RedirectNudge text="See On Map" href={redirectUrl.toString()} />
      </div>
      <img
        className="h-30 hidden md:block w-30 object-cover rounded-md"
        src={place?.place_image_url}
        alt=""
      />
    </div>
  );
};

export default LocationDisplay;
