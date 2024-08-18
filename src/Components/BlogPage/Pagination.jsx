import React, { useEffect, useState } from "react";
import usePagination from "../../Context/Pagination";

const Pagination = () => {
  const { page, setPage } = usePagination();
  let [pageNo, setPageNo] = useState(1);
  const totalPage = 8;

  const prevPage = () => {
    if (pageNo > 1) {
      setPage((prev) => ({
        ...prev,
        start: prev.start - 11,
        end: prev.end - 11,
      }));
      setPageNo((prev) => --prev);
    } else {
      setPage((prev) => ({ ...prev }));
    }
  };

  const nextPage = () => {
    if (page.end >= 89) {
      setPage((prev) => ({ ...prev, start: 0, end: 12 }));
      setPageNo((prev) => (prev = 1));
    } else {
      setPage((prev) => {
        return {
          ...prev,
          start: prev.start + 11,
          end: prev.end + 11,
        };
      });
      setPageNo((prev) => ++prev);
    }
  };

  return (
    <div className="flex justify-evenly items-center p-9 m-2">
      <button
        onClick={prevPage}
        className="p-2 px-4 text-sm font-bold bg-orange-500 text-white rounded hover:text-lg transition-all duration-50 ease-in"
      >
        PREV
      </button>

      <p>
        {pageNo} of {totalPage}
      </p>

      <button
        onClick={nextPage}
        className="p-2 px-4 text-sm font-bold bg-orange-500 text-white rounded hover:text-lg transition-all duration-50 ease-in"
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
