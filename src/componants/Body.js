

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

//  using own api errr

//  useEffect(()=>{
//   fetchData();
//  },[]);

// async function fetchData(){
//      const data = await fetch(
//        "https://localhost:5000/api/shoes"
//      );
//      const response = await data.json();

//      setFilteredShoeD(response);
   
     
// };


  return (
    <>
      <div className="Search ">
        <input
          placeholder="Search.."
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn1" onClick={filterShoeD}>Search</button>
        <TopRatedShoe 
        TopRatedShoe={filterTopRatedShoe}
        filteredShoeD= {filteredShoeD}
        />

      </div>



<div className="shoe-D">
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


