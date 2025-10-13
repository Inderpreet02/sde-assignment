import { MAPS_URL } from "../constants";
import RedirectNudge from "./RedirectNudge";

export interface HotelProps {
  description: string;
  rating: string;
  hotel_name: string;
  hotel_details?: string;
  hotel_address?: string;
  geo_coordinates?: {
    latitude: number;
    longitude: number;
  };
}

const HotelDisplay = ({ hotel }: { hotel: HotelProps }) => {
  const redirectUrl = new URL(
    MAPS_URL +
      `${hotel?.geo_coordinates?.latitude},${hotel?.geo_coordinates?.longitude}`
  );
  return (
    <div
      className="flex justify-between border p-2 my-2 rounded-md gap-2"
      key={hotel?.hotel_name}
    >
      <div>
        <h3 className="text-lg font-bold text-secondaryColor">
          {hotel?.hotel_name}
        </h3>
        <div className="italic text-sm text-gray-500">{hotel?.description}</div>
        <div className="text-sm">Address: {hotel?.hotel_address}</div>

        <div className="text-sm">Hotel Rating: {hotel?.rating}</div>
        <RedirectNudge text="See On Map" href={redirectUrl.toString()} />
      </div>
    </div>
  );
};

export default HotelDisplay;
