
//   tailwindd is not woeking

// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto h-[40vw] flex justify-between items-start p-[40px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-[10px] shadow-lg">
//       <div className="flex-1 mr-[20px]">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-[5vw]">Contact Information</h1>
//         <h2 className="text-lg text-black mb-[2vw]">Call: +91 9909009099</h2>
//         <h2 className="text-lg text-black mb-[2vw]">Email: shoeweb@gmail.com</h2>
//         <h2 className="text-lg text-black">Location: New Delhi, INDIA.</h2>
//       </div>
//       <div className="flex-1 bg-white p-[3rem] rounded-[10px] shadow-md">
//         <h1 className="text-2xl text-gray-800 mb-[1.4rem]">Get in Touch</h1>
//         <p className="text-base text-black mb-[3rem]">Feel free to contact us any time. We will get back to you as soon as we can.</p>
//         <form className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Username"
//             className="p-[10px] mb-[10px] border-b border-black rounded-[5px] text-base"
//           />
//           <input
//             type="email"
//             placeholder="Ex: bismah23@gmail.com"
//             className="p-[10px] mb-[10px] border-b border-black rounded-[5px] text-base"
//           />
//           <input
//             type="text"
//             placeholder="Message"
//             className="p-[10px] mb-[10px] border-b border-black rounded-[5px] text-base"
//           />
//           <button
//             type="submit"
//             className="py-[0.8vw] px-[0] font-medium bg-lightblue text-black rounded-[15px] text-base cursor-pointer mb-[2.2vw] border border-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;



import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '20px auto',
    height: '40vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    background: 'linear-gradient(lightblue, white, lightblue)',
    borderRadius: '10px',
    boxShadow: '2px 4px 8px black',
  };

  const numbersStyle = {
    flex: 1,
    marginRight: '20px',
  };

  const numbersHeadingStyle = {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#333',
    margin: '5vw 0',
  };

  const numbersSubheadingStyle = {
    fontSize: '20px',
    color: 'black',
    margin: '2vw 0',
  };

  const formsStyle = {
    flex: 1,
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
  };

  const formsHeadingStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1.4rem',
  };

  const formsParagraphStyle = {
    fontSize: '16px',
    color: 'black',
    marginBottom: '3rem',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #000',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '0.8vw 0',
    fontWeight: 500,
    backgroundColor: 'lightblue',
    color: '#000',
    borderRadius: '15px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '2.2vw 0',
    transition: 'background-color 0.3s ease',
    border: '1px solid black',
  };

  const buttonHoverStyle = {
    backgroundColor: '#000',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={numbersStyle}>
        <h1 style={numbersHeadingStyle}>Contact Information</h1>
        <h2 style={numbersSubheadingStyle}>Call: +91 9909009099</h2>
        <h2 style={numbersSubheadingStyle}>Email: shoeweb@gmail.com</h2>
        <h2 style={numbersSubheadingStyle}>Location: New Delhi, INDIA.</h2>
      </div>
      <div style={formsStyle}>
        <h1 style={formsHeadingStyle}>Get in Touch</h1>
        <p style={formsParagraphStyle}>
          Feel free to contact us any time. We will get back to you as soon as we can.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Ex: bismah23@gmail.com"
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Message"
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.currentTarget.style = buttonStyle}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
