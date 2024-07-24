import Cards from "./Cards";
import shoeD from "./utils/shoeD";

const Body = () =>{
    return(
   <>
      
    
     <div className="Search">
        <input  placeholder="Search.." type="text"/>
        <button>Search</button>

     </div>


   <div className="shoe-D">
    {
                shoeD.map(shoeD => <Cards details={shoeD}/>)
    }

   </div>


   
   </>
    )
};



export default Body;