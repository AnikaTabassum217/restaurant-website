// import React from 'react';
// import style from '../../src/components/style.css'
// const RegistrationForm = () => {
//     return (
//       <div id="contact-form">
//         <div>
//           <h1>Nice to Meet You!</h1>
//           <h4>Have a question or just want to get in touch? Let's chat.</h4>
//         </div>
//         <p id="failure">Oopsie...message not sent.</p>
//         <p id="success">Your message was sent successfully. Thank you!</p>
   
//         <form method="post" action="/">
//           <div>
//             <label htmlFor="name">
//               <span className="required">Name: *</span>
//               <input type="text" id="name" name="name" value="" placeholder="Your Name" required tabIndex="1" autoFocus />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="email">
//               <span className="required">Email: *</span>
//               <input type="email" id="email" name="email" value="" placeholder="Your Email" tabIndex="2" required />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="subject">
//               <span>Subject: </span>
//               <select id="subject" name="subject" tabIndex="4">
//                 <option value="hello">Product Price Question</option>
//                 <option value="quote">Where are my dragons?!</option>
//                 <option value="general">- Valar Morghulis -</option>
//               </select>
//             </label>
//           </div>
//           <div>
//             <label htmlFor="message">
//               <span className="required">Message: *</span>
//               <textarea id="message" name="message" placeholder="Please write your message here." tabIndex="5" required></textarea>
//             </label>
//           </div>
//           <div>
//             <button name="submit" type="submit" id="submit">SEND</button>
//           </div>
//         </form>
//       </div>
//     );
//   };
  
//   export default RegistrationForm;


import { useState } from "react";
import styles from "../../src/SignIn.module.css";
// import { FaHome } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { FaHome, FaEye, FaEyeSlash } from "react-icons/fa";
const RegistrationForm = () => {
//   const navigate = useNavigate();
//   const navigateHome = () => {
//     navigate("/");
//   };

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
//const [error, setError] = useState("");

  const handleSignUp = () => {
    // Perform sign-up logic here
    // After successful sign-up, you can navigate to the dashboard or perform any other necessary action
    //navigate("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className={styles.mother_container}>
    <div className={styles.container}>
      <button 
      //onClick={navigateHome}
      className={styles.back_button}>
        <FaHome className={styles.back_button__icon} />
        <span className={styles.back_button__text}>Back to Home</span>
      </button>
      <h2 className={styles.title}>Sign UP</h2>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Username/Email</label>
        <input
          type="text"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.custom_vertical_gap}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={styles.passwordToggle}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className={styles.passwordToggle__icon} />
              ) : (
                <FaEye className={styles.passwordToggle__icon} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.custom_signin_button}>
        <button className={styles.button}
         //onClick={handleSignIn}
         >
          Sign  Up
        </button>
      </div>
      {/* {error && (
        <div className={`${styles.error} ${styles.errorMessage}`}>
          {error}
        </div>
      )} */}
    </div>
  </div>
  );
};

export default RegistrationForm;
