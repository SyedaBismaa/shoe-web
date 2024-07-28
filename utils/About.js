import { Outlet } from "react-router-dom";

const About = ()=>{
    return (
        <>
        <div className=" nav1">
            <ul>
                <li>Brand</li>
                <li>Deals</li>
                <li>New</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Footwears</li>

            </ul>

        </div>
         <div className="about-section1">
            <div className="text-part">
            <h1>" Step up your Style with Our Trendy Shoes "</h1>
            <p>"find your perfect pair of shoes Today"</p>
            <button>Shop Now</button>
            </div>
            <div className="img-part"> 
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390025/04/sv01/fnd/AUS/fmt/png/RS-X-3D-Unisex-Sneakers"/>
                
            </div>
            
         </div>
     <div className="image-part">
          <div className="img1">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390025/08/sv01/fnd/AUS/fmt/png/RS-X-3D-Unisex-Sneakers"/>
          </div>

          <div className="img2">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369579/23/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers"/>
          </div>

          <div className="img3">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369770/03/sv01/fnd/KOR/fmt/png/Storm-Origin-Men's-Sneakers"/>
          </div>

          <div className="img3">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390755/05/sv01/fnd/IND/fmt/png/RS-X-Efekt-Unisex-Sneakers"/>
          </div>

          
     </div>
    
       
       
       
       
       <Outlet/>
       
        </>
    );
};


export default About;