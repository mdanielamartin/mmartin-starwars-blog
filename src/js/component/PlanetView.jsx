import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";




const PlanetView = () => {
    const { store, actions } = useContext(Context);
    const render = store.singleView.details.properties;
    const [display, setDisplay] = useState('Physical');


    const displayContent = () => {
        switch (display) {
            case 'Physical':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Diameter:</strong>{` ${render.diameter} km`}</li>
                        <li><strong>Gravity:</strong>{` ${render.gravity}`}</li>
                        <li><strong>Surface Water:</strong>{` ${render.surface_water} %`}</li>
                    </ul>
                )
            case 'Rotation':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Rotational Period:</strong>{` ${render.rotation_period} hours`}</li>
                        <li><strong>Orbital Period:</strong>{` ${render.orbital_period} days`}</li>
                    </ul>
                )
            case 'Environment':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Population:</strong>{` ${render.population} inhabitants`}</li>
                        <li><strong>Climate:</strong>{` ${render.climate}`}</li>
                        <li><strong>Terrain:</strong>{` ${render.terrain}`}</li>
                    </ul>
                )
        }

    }

    return (
        <div className="row w-100">
            <ul class="nav nav-tabs background-card rounded-top-4">
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'Physical' ? 'bg-light' : ''}`} name="Physical" onClick={(e) => setDisplay(e.target.name)} aria-current="page">Physical Characteristics</button>
                </li>
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'Rotation' ? 'bg-light' : ''}`} name='Rotation' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Orbit & Rotation</button>
                </li>
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'Environment' ? 'bg-light' : ''}`} name='Environment' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Environment & Demographics</button>
                </li>
            </ul>

            <div className="content bg-light mt-0 align-items-center rounded-bottom-4">
                <div className="mt-3"> {displayContent()}</div>

            </div>
        </div>
    )
}


export default PlanetView;
