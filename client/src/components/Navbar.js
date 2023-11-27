import { CgProfile } from "react-icons/cg"; 
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
import { GiEmeraldNecklace } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { BsGenderFemale } from "react-icons/bs";
import { GiMale } from "react-icons/gi";

import React, { useContext } from 'react'
// import logo from './myntra.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";
import { CartContext } from "./context/CartContext";
import { Badge } from "antd";
export default function Navbar() {
    const Navigate = useNavigate();
    const go_to_home = () => {
        Navigate("/");
    }
    const {cart}=useContext(CartContext)
    const { auth, setauth } = useContext(AuthContext);
    const handleLogout = () => {
        setauth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')

    }
    return (
        <>
            <header class="container font-size-bold">
                <nav class="flex space-around">
                    <div class="left item-center ">
                        <img className="navlogo" onClick={go_to_home} src="https://img.freepik.com/free-vector/fashion-logo_23-2148558723.jpg?w=996&t=st=1691671272~exp=1691671872~hmac=37c9025be1aa8fee9a2a2b6f2ed3b13003f96d58e202ac77612aa16319aa3e65" alt="LOGO" />
                        <ul class="flex uppercase justify-content">


                            <li><NavLink className="link flex item-center" to="/men"><GiMale className='icons' />Men</NavLink></li>
                            <li><NavLink className="link flex item-center" to="/women"><BsGenderFemale />Women</NavLink></li>
                            <li><NavLink className="link flex item-center" to="/jwellery"><GiEmeraldNecklace className="icons" />Jwellery</NavLink></li>
                        </ul>
                    </div>
                    <div class="right flex item-center space-around">



                        {/* <div class="wishlist mx-2"><NavLink className="link flex item-center" to='/wishlist'><AiFillHeart className="icons" />Wishlist</NavLink></div> */}
                        <div class="cart mx-2"><NavLink className="link flex item-center" to="/cart"><BiCart className="icons" />
                            Cart
                            <Badge count={cart.length} showZero>
    
                              </Badge>
                        </NavLink></div>
                        {
                            !auth.token ? <>
                                <div class="profile mx-2"><NavLink className="link flex item-center" to="/auth/login"><CgProfile className="icons" />Login</NavLink></div>
                            </>
                                :
                                <>
                                    <div class="dropdown">
                                        <button class="dropbtn flex item-center"><CgProfile className="icons"/>Profile</button>
                                        <div class="dropdown-content">
                                            <NavLink  to='/profile'><RiAccountCircleFill />My Orders</NavLink>
                                            <NavLink  onClick={handleLogout}><RiLogoutCircleRLine />Logout</NavLink>

                                        </div>
                                    </div>
                                </>
                        }
                        {/* <div class="cart mx-2"><NavLink className="link flex item-center" to="/register">Register</NavLink></div> */}
                    </div>
                </nav>
            </header>
        </>
    )
}
