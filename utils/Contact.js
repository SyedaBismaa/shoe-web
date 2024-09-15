import { useHref } from "react-router-dom";

const Contact =()=>{
    return(
       <>
       <div className="Contact">
         <div className="Numbers">
            <h1 >Contact information</h1>
            <h2>Call : +91 9909009099</h2>
            <h2>Email : shoeweb@gmail.com</h2>
            <h2>Location : New Delhi , INDIA.</h2>
         </div>
         <div className="Forms">
              <h1>Get in Touch</h1>
              <p>Fell free to contact us any time. we will get back to you as soon as we can .</p>
             <form>
             <input type="text" placeholder="username"/>
            <input type="email" placeholder="Ex : bismah23@gmail.com"  />
            <input   type="text" placeholder="Message" />
            <button > <a  href="/" >Send Message</a></button>
             </form>

         </div>
         </div>

       </>
    )
}


export default Contact;