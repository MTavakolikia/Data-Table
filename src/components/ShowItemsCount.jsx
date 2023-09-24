const ShowItemsCount = ({ startIndex, endIndex, data }) => {
  return (
    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
      Showing {startIndex + 1}-{Math.min(endIndex, data.length)} of{" "}
      {data.length} items
    </div>
  );
};

export default ShowItemsCount;
