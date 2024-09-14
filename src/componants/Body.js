

import Cards from "./Cards";
import { shoeD } from "../../utils/shoeD";
import { useEffect, useState } from "react";
import TopRatedShoe from "./TopRatedShoe";
import { Link } from "react-router-dom";
import { useEffect } from "react";
//import { response } from "express";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredShoeD, setFilteredShoeD] = useState(shoeD);

  function filterShoeD() {
    const filteredData = shoeD.filter((shoe) =>
      shoe.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredShoeD(filteredData);
  }

 function filterTopRatedShoe(shoeD){
  setFilteredShoeD(shoeD)
 }


  return (
    <>
      <div className="Search flex justify-center gap-[0.5%] color-[#000] mb-[3vw]   ">
        <input
         className=" border-[2px] pl-[0.5px] pr-[0.5%] pt-[0.4vw] pb-[0.4vw] border-black w-[30%] rounded-[15px] pl-[1%]"
          placeholder=" Search.."
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn1  p-[0.4vw] w-[5%] border-[2px] border-black rounded-[15px]" onClick={filterShoeD}>   Search</button>
        <TopRatedShoe 
        TopRatedShoe={filterTopRatedShoe}
        filteredShoeD= {filteredShoeD}
        />

      </div>



<div className="shoe-D  flex flex-wrap">
{filteredShoeD.map((shoe) => (
  <Link key={shoe.id} to={`/Shoeinfo/${shoe._id}`}>
    <Cards key={shoe._id} details={shoe} />
  </Link>
))}
</div>
</>
);
};

export default Body;


