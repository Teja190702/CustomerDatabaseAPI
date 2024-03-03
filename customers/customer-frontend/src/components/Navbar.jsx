import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {


  useEffect(()=>{
    if(!Cookies.get('authToken')){
      navigate("/login")
    }
  },[])

  const authToken = Cookies.get('authToken');
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.removeItem('user');
    Cookies.remove('authToken');
    navigate("/login");
  }

  return (
    <div className='w-full font-semibold text-[#ffe0c6] flex items-center justify-between px-12 py-2 h-[10vh] bg-[#f64668]'>
        <div className=' font-bold text-xl'>
            Customer Manager
        </div>
        <div className='flex gap-12'>
            <Link to="/">Home</Link>
            <Link to="/customers">View Customers</Link>
            <Link to="/add-customers">Add Customers</Link>
            
            <span className='cursor-pointer' onClick={logout}>Logout</span>
        </div>
    </div>
  )
}

export default Navbar