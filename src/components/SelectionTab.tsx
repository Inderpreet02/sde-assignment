interface SelectionTabProps {
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

const SelectionTab = ({
  text = "",
  Icon,
  onClick = () => {},
}: SelectionTabProps) => {
  return (
    <div
      className="flex items-center gap-1 border-dotted rounded border-2 border-gray-400 p-4 my-2 w-full cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div>
        <Icon className="bg-secondaryColor text-primaryColor p-1 text-2xl rounded" />
      </div>
      <div className="text-sm text-center">{text}</div>
    </div>
  );
};

export default SelectionTab;
