const Cards = (props)=>{

     const{name , type , rating , price , imageUrl } = props.details ;

    return(
     <div className="Shoe-card h-[500px] w-[350px] border-2 border-black rounded-[15px] ml-[5vw] mb-[5vw] shadow-[2px_2px_2px_2px]">
        <img className =" h-[60%] w-[100%] object-cover p-[1vw] rounded-lg" src={`${imageUrl}`}/>

         <div className="shoe-details flex justify-between  m-[2vw] gap-5">
             
         <div>
         <h1>{name}</h1>
         <h3>{type}</h3>
         </div>

         <div>   
         <h1>{rating}</h1>
         <h3>{price}</h3>
         </div>

         </div>
         <button className="w-[50%]
          m-[7%] 
          ml-[17%] 
          p-[2%]
        text-white 
        rounded-[15px]  
        bg-gradient-to-r from-black to-gray-600 hover:from-gray-600 hover:to-black ...  
         
         ">Buy Now</button>
     </div>
    )
}

export default Cards;