const ListDisplay = ({
  list = [],
  heading = "",
}: {
  list?: string[];
  heading?: string;
}) => {
  return (
    <>
      {heading && (
        <h2 className="mb-2 text-lg font-semibold text-gray-900">{heading}</h2>
      )}

      <ul className="space-y-1 text-gray-600 list-disc list-inside">
        {list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListDisplay;
