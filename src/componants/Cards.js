const Cards = (props)=>{

     const{name , type , rating , price , imageUrl } = props.details ;

    return(
     <div className="Shoe-card">
        <img src={`${imageUrl}`}/>

         <div className="shoe-details">
             
         <div>
         <h1>{name}</h1>
         <h3>{type}</h3>
         </div>

         <div>   
         <h1>{rating}</h1>
         <h3>{price}</h3>
         </div>

         </div>
         <button>Buy Now</button>
     </div>
    )
}

export default Cards;