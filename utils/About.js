import { Outlet } from "react-router-dom";
import React from "react";

const About = ()=>{
    return (
        <>
        <div className=" nav1">
            <ul className="flex justify-center">
                <li className="list-none mx-10 my-9 text-2xl font-medium">Brand</li>
                <li className="list-none mx-10 my-9 text-2xl font-medium">Deals</li>
                <li className="list-none mx-10 my-9 text-2xl font-medium">New</li>
                <li className="list-none mx-10 my-9 text-2xl font-medium">Men</li>
                <li className="list-none mx-10 my-9 text-2xl font-medium">Women</li>
                <li className="list-none mx-10 my-9 text-2xl font-medium">Kids</li>
                <li className="list-none mx-10 my-9 text-2xl font-medium">Footwears</li>
            </ul>

        </div>
         <div className="about-section1">
            <div className="text-part">
            <h1>" Step up your Style with Our Trendy Shoes "</h1>
            <p>"find your perfect pair of shoes Today"</p>
            <button>Shop Now</button>
            </div>
            <div className="img-part"> 
                <img src="https://i.pinimg.com/originals/34/75/87/347587d2fc2b178499c9c8eeeaf9c8a5.jpg"/>
                
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
         <div className="about-section2">
          <div className="S2-img">
            <img src="https://th.bing.com/th/id/OIP.Wl-SSbX63-UzmsiF8wB29gAAAA?rs=1&pid=ImgDetMain"/>
          </div>
          <div className="S2-text">
            <h1>We Provide High Quality Shoe </h1>
            <p > The Nike Shoe is Know for its sleek desingn. comfortable fit, and high-quality materials. One of the key features of a Nike shoe is its use of innovative technologies to enhance </p>
            <p className="py-10"> Nike is a popular brand of asthetic footwear that offers a range of shoes desinged for various sports and activities, as well as casual wear.</p>

            <button>New Arrived</button>
          </div>
         </div>
       
       
       
       
       <Outlet/>
       
        </>
    );
};


export default About;