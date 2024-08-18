import React, { useState } from "react";
import Card from "../Card/Card";
import { CardData } from "../../API/Api";
import Pagination from "./Pagination";
import { PaginationProvider } from "../../Context/Pagination";
import { NavLink, Link } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const BlogPage = () => {
  const [value, setValue] = useState([]);
  const [click, setClick] = useState(true);
  const [page, setPage] = useState({
    start: 0,
    end: 12,
    isClicked: true,
    allFuc: () => {},
  });
  const Categories = ["Startups", "Security", "AI", "Apps", "Work", "Health"];

  const slectedCatogery = (val) => {
    //setPage((prev)=> ({...prev , start:0,end:12}))
    setValue(val);
    setClick(false);
  };

  page.allFuc = () => setClick(true);

  const newCardData = CardData.filter((val) => val.category === value);

  // useEffect(newCardData, [value]);

  return (
    <PaginationProvider value={{ page, setPage }}>
      <div className="flex flex-col lg:flex-row gap-14 ">
        <div >
          <div className=" text-white flex justify-between items-center lg:gap-14 px-1 font-bold rounded mt-4 md:gap-2  ">
            <button
              onClick={page.allFuc}
              className="font-bold text-sm  bg-blue-800 p-2 px-2 rounded"
            >
              All
            </button>
            {Categories.map((categoryVal, idx) => {
              return (
                <NavLink
                  key={idx}
                  onClick={() => slectedCatogery(categoryVal)}
                  className={({ isActive }) =>
                    ` bg-orange-400  px-2 text-sm p-1 rounded  `
                  }
                >
                  {categoryVal}
                </NavLink>
              );
            })}
          </div>
          {/* Blog's Card Category*/}

          {click ? (
            <Card CardData={CardData} />
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {newCardData.slice(page.start, page.end).map((blog, idx) => (
                <Link key={idx} className="p-5 shadow-lg rounded">
                  <div>
                    <img src={blog.image} alt="" className="w-full" />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="mb-2">{blog.author}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Published : {blog.published_date}
                  </p>
                </Link>
              ))}
            </div>
           )} 

          {/* Blog's Card Section*/}

          {/* SideBar Section */}
        </div>

        <div className="mt-20">
          <SideBar />
        </div>
        {/* Pagination Section */}
      </div>
      <Pagination />
    </PaginationProvider>
  );
};

export default BlogPage;
