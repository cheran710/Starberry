import {useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../DataHandle/Slice/AuthSlice'; 

export default function LayoutLogic() {
  
  const [profileOpen, setProfileOpen] = useState(false)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleprofileopen = () => {
    setProfileOpen(!profileOpen)
  }
  
  function handleLogout() {
     dispatch(logout());
     navigate('/Login');
  }

 
  return {
    handleprofileopen,
    handleLogout
  }
}


