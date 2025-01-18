import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardView from "./CardView.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import '../../styles/global.css'


const CardGrid = ({ datos }) => {
    console.log('esto son los datos', datos)
    return (
        <div className="d-flex row">
            {
                datos?.map((char, index) => {
                    return (
                        <div key={index} className="col-lg-3 col-md-12 d-flex justify-content-evenly">
                            <CardView person={char} />
                        </div>
                    )
                })
            }





            <div className="col-lg-2 col-md-12 d-flex align-items-center justify-content-start">
                <button className="btn bg-transparent">
                    <FontAwesomeIcon className="text-white fs-1 d-block mb-2 ms-3 " icon={faCircleArrowRight} />
                    <Link className='text-center regular text-white fs-5 mt-1' to={'/databank'}>View All</Link>
                </button>

            </div>
        </div>

    );
}

export default CardGrid
