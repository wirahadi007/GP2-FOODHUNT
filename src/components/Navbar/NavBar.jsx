import React from "react";
import { Link, Router } from "react-router-dom";

const Navbar = () => {
    return(

        <nav>
            <div className="flex gap-x-6 ml-4 p-2 text-yellow-500 font-semibold" >
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/order">Order</Link>
                    <Link to='/admin'>Admin</Link>
            </div>
        </nav>

    )
}

export default Navbar;