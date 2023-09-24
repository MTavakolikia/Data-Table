const ItemsPerPage = ({ itemsPerPage, setItemsPerPage }) => {
  return (
    <div>
      <label className="me-2 dark:text-gray-400" htmlFor="item-count">
        Items per page
      </label>
      <input
        id="item-count"
        type="text"
        className="p-1 w-10 text-center text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="item per page"
        value={itemsPerPage}
        onChange={(e) => {
          setItemsPerPage(e.target.value);
        }}
      />
    </div>
  );
};

export default ItemsPerPage;
