
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const Register = () => {
    const{creactUser}= useContext(AuthContext);
    console.log(creactUser);
    const navigate = useNavigate();


    const handleSignUp= async e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        
        const password = form.password.value;
        const confirmPassword = form.rePassword.value;
        console.log(email, name, password, confirmPassword);

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }


        try{
            const result= await creactUser(email,password);
            console.log(result);
            navigate('/');

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              


            
        }

         
        catch(err)
        {
        //   console.log(err);
        }

    }

    return (
        <div>
            <div>
          <div className="my-[60px]">

          
          


<div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
<div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
<div
className='hidden bg-cover bg-center lg:block lg:w-1/2 my-[30px] mx-[20px] '
style={{
backgroundImage: `url('https://i.ibb.co/Y82yDtr/pexels-mati-2528695.jpg')`,
}}
>


</div>


<div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
<div className='flex justify-center mx-auto'>
<img
  className='w-auto h-7 sm:h-8'
  src=''
  alt=''
/>
</div>

<p className='mt-3 text-4xl'>
 Sign In

</p>




<form  onSubmit={handleSignUp}>


<div className='mt-4'>
  <label
    className='block mb-2 text-sm font-medium text-gray-600 '
    htmlFor='LoggingName'
  >
    
  </label>
  <input
 
    id='LoggingName'
    autoComplete='Name'
    
    placeholder=" enter your Name"
    name='name'
  
    type='Name'
  />
</div>

<hr className="border border-[1px] border-black my-[16px]" />
<div className='mt-4'>
  <label
    className='block mb-2 text-sm font-medium text-gray-600 '
    htmlFor='LoggingEmailAddress'
  >
    
  </label>
  <input
 
    id='LoggingEmailAddress'
    autoComplete='email'
    
    placeholder=" enter your email"
    name='email'
  
    type='email'
  />
</div>

<hr className="border border-[1px] border-black my-[16px]" />

<div className='mt-4'>
  <div className='flex justify-between'>
    <label
      className='block mb-2 text-sm font-medium text-gray-600 '
      htmlFor='loggingPassword'
    >
     
    </label>
  </div>

  <input
    id='loggingPassword'
    autoComplete='current-password'
    name='password'
    placeholder="Enter your password"
   
    type='password'
  />
</div>

<hr className="border border-[1px] border-black my-[16px]" />

<div className='mt-4'>
  <div className='flex justify-between'>
    <label
      className='block mb-2 text-sm font-medium text-gray-600 '
      htmlFor='rePassword'
    >
     
    </label>
  </div>

  <input
    id='rePassword'
    autoComplete='current-password'
    name='repassword'
    placeholder="RePassword"
   
    type='password'
  />
</div>

<hr className="border border-[1px] border-black my-[16px]" />


<div className="form-control">
  <label className="cursor-pointer flex">
    
    <input type="checkbox"  required className="checkbox checkbox-accent" />
    <span className=" mb-[4px] ml-[10px]">Remember me</span>
  </label>

</div>

<div className='mt-6'>
  <button
    type='submit'
    className="btn px-[30px] bg-[#20d7ab] text-white font-bold"
  >
   Register
  </button>
</div>
</form>

  

  
    
   
  

  <div>
    <Link to='/I am Already Member'> <h1 className= "underline underline-offset-2">Create Your Account</h1></Link>
  </div>
</div>
</div>
</div>

</div>
        </div>
        </div>
    );
};

export default Register;