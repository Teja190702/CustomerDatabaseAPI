
import React,{useState,useContext} from 'react'
import img from '../assets/bg1.webp'
import { Link,useNavigate  } from 'react-router-dom';
const SignUp = () => {
    const host = "http://localhost:3001";
    const navigate = useNavigate();

    const [credentials,setCredentials] = useState({name:'',email:'',password:'',confirmPassword:'',role:"Project Guide"});

    const onchange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    const onsubmit=async(e)=>{
        e.preventDefault();

        if(credentials.password!==credentials.confirmPassword){
            alert('Passwords do not Match!');
            setCredentials({...credentials,password:'',confirmPassword:''})
            return;
        }

        const response = await fetch(`${host}/auth/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...credentials})
        })
        const data = await response.json();
        console.log(data)
        
        setCredentials({name:'',email:'',password:'',confirmPassword:'',role:''})
        navigate('/login');
    }

  return (
    <div className='h-[120vh] md:h-[100vh] w-[100%] relative bg-[#2A4D77]'>
        <img src={img} alt="" className='absolute h-[120vh] md:h-[100vh] w-[100%] object-cover top-0 left-0 brightness-50'/>

        
        <form className='p-8 w-[90%] md:w-[30%] bg-[#41436a] text-white rounded-xl z-50 absolute  left-[50%] translate-x-[-50%]  top-[60%] md:top-[50%] translate-y-[-50%] shadow-lg' onSubmit={onsubmit}>

            <h2 className='font-bold text-3xl'>Register Today</h2>
            <p className='mb-8 mt-2 text-gray-200 font-semibold'>Manage your customers data with ease and professionalism.</p>

            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Name</label>
                <input type="text" name='name' value={credentials.name} placeholder='Enter Name here' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2 text-black' onChange={onchange} required/>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Email</label>
                <input type="email" name='email' value={credentials.email} placeholder='username@gmail.com' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2 text-black' onChange={onchange} required/>
            </div>
            
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Password</label>
                <input type="password" name='password' value={credentials.password} placeholder='**********' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2 text-black' onChange={onchange} required/>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Confirm Password</label>
                <input type="password" name='confirmPassword' value={credentials.confirmPassword} placeholder='**********' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2 text-black' onChange={onchange} required/>
            </div>

            <button className='bg-[#f64668] hover:bg-[#c45168] cursor-pointer text-white py-2 text-lg w-full rounded-xl mt-6 ' type='submit'>Register</button>
            <p className='mt-2 text-center'> Already Registered? <Link to='/login' className='font-semibold'>Login here</Link> </p>
        </form>
    </div>
  )
}


export default SignUp