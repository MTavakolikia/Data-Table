const Pagination = ({
  setCurrentPage,
  currentPage,
  startPage,
  endPage,
  handlePageChange,
  data,
  endIndex,
}) => {
  return (
    <ul className="inline-flex -space-x-px text-sm h-8">
      <li>
        <button
          className="flex items-center disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:hover:text-gray-400 justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          type="button"
        >
          Previous
        </button>
      </li>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const page = startPage + index;
        return (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`flex ${
                page === currentPage
                  ? "text-slate-700 dark:text-slate-50 font-bold"
                  : "text-gray-500 dark:text-gray-400"
              } items-center justify-center px-3 h-8 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {page}
            </button>
          </li>
        );
      })}

      <li>
        <button
          onClick={() => setCurrentPage((current) => current + 1)}
          disabled={endIndex >= data.length}
          className="flex items-center disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:hover:text-gray-400 justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          type="button"
        >
          Next
        </button>
      </li>
    </ul>
  );
};
export default Pagination;
