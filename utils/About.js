import { Outlet } from "react-router-dom";
import React from "react";

const About = ()=>{
    return (
        <>
        <div style={{backgroundColor : '#FAFAFA'}} className=" nav1 h-[8%] w-[100%]   mb-[0.6%]">
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
         <div className="about-section1 h-[40vw] w-[100%] bg-white flex  pt-[2%] justify-around">
            <div className="text-part h-[95%] w-[43%] p-[2%] " >
            <h1  style={{ fontSize: '40px' }} className=" pb-[2rem]  -tracking-tighter ">" Step up your Style with Our Trendy Shoes "</h1>
            <p className="mt-[5%]">"find your perfect pair of shoes Today"</p>
            <button style={{
              
             borderRadius : '15px', 
              padding: '0.3rem 2.3rem', 
              border: '1px solid black', 
              display: 'inline-block', 
              textAlign: 'center' ,
              marginTop : '7.6rem',
              backgroundImage: 'linear-gradient(to top, #0089C0 , #0484C1 , #FFFFFF)',
               color : 'back',
        
            }} ><a  href="/">Buy Now</a></button>
            </div>
            <div className="img-part h-[95%] w-[50%] bg-black"> 
                <img className="h-[100%] w-[100%] object-cover" src="https://i.pinimg.com/originals/34/75/87/347587d2fc2b178499c9c8eeeaf9c8a5.jpg"/>
                
            </div>
            
         </div>
        <div className="image-part h-[18vw] w-[100%] bg-[#FAFAFA] flex justify-around items-center pb-[14%]">
          <div className="img1 h-[15%] w-[14%] object-cover">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390025/08/sv01/fnd/AUS/fmt/png/RS-X-3D-Unisex-Sneakers"/>
          </div>

          <div className="img2 h-[15%] w-[14%] object-cover">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369579/23/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers"/>
          </div>

          <div className="img3 h-[15%] w-[14%] object-cover">
            <img src="https://th.bing.com/th/id/OIP.XeJPXBi2TohGYCEneNxRUwHaHa?pid=ImgDet&w=474&h=474&rs=1"/>
          </div>

          <div className="img4 h-[15%] w-[14%] object-cover ">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390755/05/sv01/fnd/IND/fmt/png/RS-X-Efekt-Unisex-Sneakers"/>
          </div>

          
        </div>
         <div className="about-section2 h-[40vw] w-[100%] bg-[#FEFEFE] flex justify-around pt-[2%]">
          <div className="S2-img h-[98%] w-[50%] bg-gray-900">
            <img className="h-[100%] w-[100%] object-cover" src="https://th.bing.com/th/id/OIP.Wl-SSbX63-UzmsiF8wB29gAAAA?rs=1&pid=ImgDetMain"/>
          </div>
          <div className="S2-text h-[95%] w-[50%] bg-[#FEFEFE]">
          <h1 style={{fontSize: '2.6rem' , fontWeight: '500' , padding: ' 9% 0%'}}  >We Provide High Quality Shoe </h1>
            <p  className="text-xl"> The Nike Shoe is Know for its sleek desingn. comfortable fit, and high-quality materials. One of the key features of a Nike shoe is its use of innovative technologies to enhance </p>
            <p className="py-10"> Nike is a popular brand of asthetic footwear that offers a range of shoes desinged for various sports and activities, as well as casual wear.</p>

            <button
             style={{

              borderRadius : '15px', 
              padding: '0.27vw 3.4vw', 
              border: '1px solid black', 
              display: 'inline-block', 
              textAlign: 'center' ,
              marginTop : '2em',
              backgroundImage: 'linear-gradient(to top, #017E80 , #00FAC7 , #464B4F)',
               color : 'back',
             }}
            
            ><a href="/">New Arrived</a></button>
          </div>
         </div>
       
       
       <Outlet/>
       
        </>
    );
};


export default About;