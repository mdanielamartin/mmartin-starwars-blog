import React, { useContext } from "react";
import { Context } from "../store/appContext";


const PeopleView = () => {

    const { store, actions } = useContext(Context);
    const render = store.singleView.details.properties;


    return (
        <div className="row d-flex w-100 h-100 gy-2 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row justify-content-center h-100">
                    <div className="col-lg-1 col-md-6 col-sm-6 d-flex align-items-center justify-content-center text-center background-card px-2 w-auto rounded-start-4">
                        <h2 className="title text-center fs-5">Birth</h2>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 bg-light d-flex rounded-end-4 w-auto me-3 px-3">
                        <ul className="regular mt-3 px-0">
                            <li><strong>Birth Year: </strong>{render.birth_year}</li>
                            <li><strong>Gender: </strong>{render.gender}</li>
                            <li><strong>Homeworld:</strong>{` ${store.singleView.planet}`}</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row justify-content-center h-100">
                    <div className="col-lg-1 col-md-6 col-sm-6 d-flex align-items-center justify-content-center text-center background-card rounded-start-4 w-auto px-2" >
                        <h2 className="title text-center fs-5">Physical</h2>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 bg-light d-flex w-auto rounded-end-4 me-3 px-3">
                        <ul className="regular mt-3 px-0">
                            <li><strong>Height: </strong>{`${render.height} cm`}</li>
                            <li><strong>Mass: </strong>{`${render.mass} kg`}</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row justify-content-center h-100">
                    <div className="col-lg-1 col-md-6 col-sm-6 px-2 align-items-center justify-content-center text-center background-card d-flex rounded-start-4 w-auto px-2">
                        <h2 className="title fs-5">Other</h2>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 bg-light d-flex w-auto rounded-end-4 px-3">
                        <ul className="regular mt-3 px-0">
                            <li><strong>Eye Color: </strong>{render.eye_color}</li>
                            <li><strong>Skin Color: </strong>{render.skin_color}</li>
                            <li><strong>Hair Color: </strong>{render.hair_color}</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>)
}


export default PeopleView
