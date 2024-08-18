import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import usePagination from "../../Context/Pagination";
const Category = ({ newCardData }) => {
  const { page, setPage } = usePagination();

  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {page.isclicked
          ? newCardData.slice(page.start, page.end).map((val, idx) => {
              return (
                <Link key={idx} className="p-5 shadow-lg rounded">
                  <div>
                    <img src={val.image} alt="" className="w-full" />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                    {val.title}
                  </h3>
                  <p className="mb-2">{val.author}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Published : {val.published_date}
                  </p>
                </Link>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Category;
