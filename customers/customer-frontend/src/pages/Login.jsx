import React,{useEffect, useState,useContext} from 'react'
import img from '../assets/bg1.webp'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
// import HostContext from '../context/HostContext';
const Login = () => {
   
    // const {host} = useContext(HostContext);
    const host="http://localhost:3001"
    

    const navigate = useNavigate();
    const [credentials,setCredentials] = useState({email:'',password:''});

    const onchange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    const onsubmit=async(e)=>{
        e.preventDefault();

        const response = await fetch(`${host}/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...credentials})
        })
        const data = await response.json();
        console.log(data)

        if(!data.success){
            alert(data.error);
            return;
        }

        Cookies.set('authToken',data.authToken);
        
        localStorage.setItem('user',JSON.stringify(data.user));


        setCredentials({name:'',email:'',password:'',confirmPassword:''})


        navigate('/')
    }

    useEffect(()=>{
        if(Cookies.get('authToken')){
            navigate('/');
        }
    },[])

  return (
    <div className='h-[100vh] w-[100vw] relative bg-[#2A4D77]'>
        <img src={img} alt="" className='absolute h-[100vh] w-[100%] object-cover top-0 left-0 brightness-50'/>

        
        <form className='p-8 w-[90%] md:w-[30%] bg-[#41436a] text-white rounded-xl z-50 absolute  left-[50%] translate-x-[-50%]  top-[60%] md:top-[50%] translate-y-[-50%] shadow-lg' onSubmit={onsubmit}>

            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-3xl'>Login</h2>
                
            </div>
            <p className='mb-8 mt-2 text-gray-200 font-semibold'>Manage your customers data with ease and professionalism.</p>

            
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Email</label>
                <input type="email" name='email' value={credentials.email} placeholder='username@gmail.com' className='text-black w-full p-2 outline-none rounded-xl border-gray-500 border-2' onChange={onchange} required/>
            </div>
            
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Password</label>
                <input type="password" name='password' value={credentials.password} placeholder='**********' className='text-black w-full p-2 outline-none rounded-xl border-gray-500 border-2' onChange={onchange} required/>
            </div>
            
            <button className='bg-[#f64668] hover:bg-[#c45168] cursor-pointer text-white py-2 text-lg w-full rounded-xl mt-6 ' type='submit'>Login</button>
            <p className='mt-4 text-center'> Already have an account? <Link to='/signup' className='font-semibold'>Register here</Link> </p>
            
        </form>
    </div>
  )
}

export default Login