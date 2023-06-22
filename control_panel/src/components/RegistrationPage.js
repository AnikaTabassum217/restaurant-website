import React,{useState,useEffect} from "react";
// import styles from '../../src/Registration.css'
import Registration from "./Registration.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert';
const RegistrationPage=()=>{

    const {register, handleSubmit,watch,formState:{errors}}=useForm();
    const onSubmit =data =>console.log(data)

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      function handleRegistration() {
        if (errors.firstName || errors.lastName || errors.email || errors.password) {
          Swal({
            title: 'Error!',
            text: 'Please fill in all the required fields.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        } else {
          Swal({
            title: 'Success!',
            text: 'Registration completed successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
      }
   return(
    <div >

        <form id="form" className="" onSubmit={handleSubmit(onSubmit)}>

        <div className= "register">
        <h3 className="registration_name">Registration Form</h3>


        <div className="">
        <input className="first_name" {...register("firstName", {required:true})} placeholder="First Name"
         style={{ paddingLeft: '30px' }}
        ></input>
        <p className="error_message">
            {errors.firstName?.type==="required" && "First Name is required"}
        </p>
        </div>

        <div >
        <input className="last_name" {...register("lastName", {required:true})} placeholder="Last Name"
         style={{ paddingLeft: '30px' }}
        ></input>
        <p className="error_message">
         {errors.lastName?.type==="required" && "Last Name is required"}
        </p>
        </div>


        <div className="">
        <input className="email" {...register("email", {required:true})} placeholder="Email"
         style={{ paddingLeft: '30px' }}
        ></input>
        <p className="error_message">
          {errors.email?.type ==="required" && "Email is required"}
        </p>
        </div>

        <div className="">
        <input
            className="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register("password", { required: true })}
            style={{ paddingLeft: '30px' }}
            />
            <button onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>          
            <p className="error_message">
            {errors.password?.type === "required" && "Password is required"}
            </p>              
        </div>

        <div className="">
        <input className="confirm_password"
                type={showPassword ? 'text' : 'password'}
                {...register("confirmPassword",{required:true})}
                placeholder="Confirm Password"
                style={{ paddingLeft: '30px'}}
                />
                <button onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>

                <p>
                   {errors.confirmPassword?.type==="required" && "Confirm Password is required"}
                </p>
               </div>

        <div className="checkboxDescription">
        <input className="checkbox" value="test" type="checkbox" /> 
        <p className="description">I agree in all <span className="terms_and_condition">Terms and Condition</span> </p>
        </div>

        <div>
            <button className="registration" onClick={handleRegistration()}>
                Registration
            </button>    
        </div>

        </div>

        </form>
       
      
    </div>
)
}
export default RegistrationPage;

