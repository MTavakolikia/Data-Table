import { useState, useEffect, useRef } from "react";

const TableOptions = ({
  searchBtn = false,
  data = [],
  dropDownTitle = "Options",
  handleToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [optionsData, setOptionsData] = useState([
  //     { value: "pagination", label: "pagination", isChecked: true },
  //     { value: "row_count", label: "Row Count", isChecked: true },
  //     { value: "table_stats", label: "Table Stats", isChecked: true },
  //     { value: "search", label: "Search", isChecked: true },
  //     { value: "csv_download", label: "CSV Download", isChecked: true },
  //   ]);
  //   const [optionsData, setOptionsData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredOptions = data.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          {dropDownTitle}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute left-0 mt-2 w-52 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              className="p-2"
            >
              {searchBtn && (
                <li>
                  <input
                    type="text"
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..."
                    defaultValue={searchValue}
                    onChange={handleSearchChange}
                  />
                </li>
              )}

              {filteredOptions.map((item) => (
                <li key={item.value}>
                  <div className="relative flex items-center overflow-hidden my-2">
                    <div className="flex">
                      <label className="flex relative items-center justify-center mx-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.isChecked}
                          readOnly
                        />
                        <div
                          onClick={() => handleToggle(item.value)}
                          className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-slate-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-600"
                        ></div>
                        <span className="ml-2 text-base font-medium text-gray-900">
                          {item.label}
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOptions;
