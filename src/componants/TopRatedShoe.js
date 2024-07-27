import { shoeD } from "../../utils/shoeD";

const TopRatedShoe = (props)=>{

function getTopRatedShoe (){
  const topRatedShoe = props.filteredShoeD.filter(shoeD =>shoeD.rating >=4);

  props.TopRatedShoe(topRatedShoe);

  console.log("top Rated Shoe ",topRatedShoe )

}

  return(
    <button className="btn2" onClick={getTopRatedShoe}>TopRatedShoe</button>
  )
}

export default TopRatedShoe;