import { shoeD } from "../../utils/shoeD";

const TopRatedShoe = (props)=>{

function getTopRatedShoe (){
  const topRatedShoe = props.filteredShoeD.filter(shoeD =>shoeD.rating >=4);

  props.TopRatedShoe(topRatedShoe);

  console.log("top Rated Shoe ",topRatedShoe )

}

  return(
    <button className="btn2 pl-[0.8vw] pr-[0.8vw] pt-[0.10vw] pb-[0.10vw] border-2 border-black rounded-[15px]" onClick={getTopRatedShoe}>TopRatedShoe</button>
  )
}

export default TopRatedShoe;