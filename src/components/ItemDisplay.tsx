import { CiSquareCheck } from "react-icons/ci";
import RedirectNudge from "./RedirectNudge";
import { ITEM_URL } from "../constants";

export interface ItemProps {
  item: string;
  quantity: string;
}
const ItemDisplay = ({
  itemList = [],
  heading = "",
}: {
  itemList: ItemProps[];
  heading?: string;
}) => {
  return (
    <div>
      {heading && (
        <h2 className="mb-2 text-lg font-bold text-gray-900">{heading}</h2>
      )}
      {itemList.map((itemObj, index) => (
        <div key={index} className="mb-1 flex items-start gap-2">
          <CiSquareCheck className=" text-2xl pt-1.5" />
          <div>
            <div className="font-medium">{itemObj.item}</div>
            <div className="italic text-sm text-gray-500">
              quantity: {itemObj.quantity}
            </div>
          </div>
          <div>
            <RedirectNudge
              text=""
              href={new URL(ITEM_URL + itemObj.item).toString()}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDisplay;
