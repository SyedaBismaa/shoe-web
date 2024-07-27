

import Cards from "./Cards";
import { shoeD } from "../../utils/shoeD";
import { useState } from "react";
import TopRatedShoe from "./TopRatedShoe";
import { Link } from "react-router-dom";


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
      <div className="Search">
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
  <Link key={shoe.id} to={`/Shoeinfo/${shoe.id}`}>
    <Cards details={shoe} />
  </Link>
))}
</div>
</>
);
};

export default Body;


