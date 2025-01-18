import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Accordion = () => {

    const { store, actions } = useContext(Context);
    const render = store.singleView.details.properties;
    return (
        <div className="container d-flex w-100 h-100  justify-content-between py-3">
            <div className="row d-flex g-0 mx-0">
                <div className="col-1 h-auto align-items-center justify-content-center text-center background-card d-flex w-auto p-3 rounded-start-4">
                    <h2 className="title text-center fs-5">Birth</h2>
                </div>
                <div className="col-4 bg-light d-flex align-items-center justify-content-start w-auto ps-0 pe-5 rounded-end-4">
                    <ul className="regular p-0 ms-2 mt-3">
                        <li><strong>Birth Year: </strong>{render.birth_year}</li>
                        <li><strong>Gender: </strong>{render.gender}</li>
                        <li><strong>Homeworld:</strong> Earth</li>
                    </ul>
                </div>
            </div>

            <div className="row d-flex ms-4">
                <div className="col-1 h-auto align-items-center justify-content-center text-center background-card d-flex w-auto rounded-start-4" >
                    <h2 className="title text-center fs-5">Attributes</h2>
                </div>
                <div className="col-4 bg-light d-flex w-auto ps-0 pe-5 rounded-end-4 me-5">
                    <ul className="regular p-0 ms-2 mt-3">
                        <li><strong>Height: </strong>{`${render.height} cm`}</li>
                        <li><strong>Mass: </strong>{`${render.mass} kg`}</li>
                    </ul>
                </div>
            </div>

            <div className="row d-flex mx-0">
                <div className="col-1 h-auto align-items-center justify-content-center text-center background-card d-flex w-auto p-3 rounded-start-4">
                    <h2 className="title">Other</h2>
                </div>
                <div className="col-4 bg-light d-flex w-auto ps-0 pe-5 rounded-end-4">
                    <ul className="regular p-0 ms-2 mt-3">
                        <li><strong>Eye Color: </strong>{render.eye_color}</li>
                        <li><strong>Skin Color: </strong>{render.skin_color}</li>
                        <li><strong>Hair Color: </strong>{render.hair_color}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Accordion
