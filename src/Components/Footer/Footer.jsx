import React, { useState } from "react";

const Footer = () => {
    const [value,setValue]=useState('')
  

    const submit = (e)=>
        {
            e.preventDefault()
         
            
        }
  const category = [
    "News",
    "World",
    "Games",
    "References",

    "Website's",
    "Ecommerce",
    "Business",
    "Entertainment",
    "Portfolio",

    "Media",
    "Brchure",
    "NonProfit",
    "Education",
    "Projects",

    "Infopreneur",
    "Personal",
    "Wiki",
    "Forum ",
    "Projects",
  ];

  return (
    <>
      <div className="bg-gray-900 ">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
          <div className="grid pb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 ">
              {/* Category 1*/}

              <div>
                <p className="text-gray-300 font-medium tracking-wider">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  {category.slice(0, 4).map((val, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className=" text-gray-500 transition-colors duration-400
                                hover:text-orange-500"
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 2*/}

              <div>
                <p className="text-gray-300 font-medium tracking-wider">
                  Apples
                </p>
                <ul className="mt-2 space-y-2">
                  {category.slice(4, 9).map((val, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className=" text-gray-500 transition-colors duration-400
                                hover:text-orange-500"
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 3*/}

              <div>
                <p className="text-gray-300 font-medium tracking-wider">
                  Cherry
                </p>
                <ul className="mt-2 space-y-2">
                  {category.slice(9, 14).map((val, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className=" text-gray-500 transition-colors duration-400
                                hover:text-orange-500"
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 4*/}

              <div>
                <p className="text-gray-300 font-medium tracking-wider">
                  Business
                </p>
                <ul className="mt-2 space-y-2">
                  {category.slice(14, 19).map((val, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className=" text-gray-500 transition-colors duration-400
                                hover:text-orange-500"
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subscription */}

            <div className="md:max-w-md lg:col-span-2 lg:mt-0  mt-5">
              <p className="text-gray-300 font-medium tracking-wider">
                Subscribe for Updates
              </p>
              <form className="mt-4 flex flex-col md:flex-row" onClick={submit}>
                <input
                  type="email"
                  name="email"
                  value={value}
                  id="email"
                  
                  onChange={(e)=>setValue(e.target.value)}
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg:white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none "
                />
                <button
                onClick={()=>{
                    if(value.length===0)
                        {
                            alert("please Input some thing")
                        }
                        else{
                            setValue('')
                            
                        }
                }}
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 rounded shadow-md  hover:bg-orange-500 focus:outline-none border"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero ex ullam dolores sit dolorem iste nam, magni alias ratione. Fuga odio sint aut suscipit?</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-400 pb-9">Copyright 2024 | All right resereved. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
