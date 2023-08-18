import React, { useState } from "react";
import './Navbar.css';

function Navbar(props) {
    let filterData = props.filterData;
    let categoryName=props.categoryName;
    return (
        <div className="navbar">
            {
                filterData.map(navItem => (
                    <button className={
                        categoryName===navItem.title ?
                        "amit border" :
                        "amit"
                        }
                        key={navItem.id}
                        onClick={() =>
                            props.filterHandler(navItem.title)
                        }
                    >
                        {navItem.title}
                    </button>
                ))
            }
        </div>
    );
}
export default Navbar;