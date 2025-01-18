import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";




const VehicleView = () => {
    const { store, actions } = useContext(Context);
    const render = store.singleView.details.properties;
    const [display, setDisplay] = useState('General');


    const displayContent = () => {
        switch (display) {
            case 'General':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Model:</strong>{` ${render.model}`}</li>
                        <li><strong>Manufacturer:</strong>{` ${render.manufacturer}`}</li>
                        <li><strong>Vehicle Class:</strong>{` ${render.vehicle_class}`}</li>
                    </ul>
                )
            case 'Specs':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Length:</strong>{` ${render.length} meters`}</li>
                        <li><strong>Max Atmosphering Speed:</strong>{` ${render.max_atmosphering_speed} km/h`}</li>
                    </ul>
                )
            case 'Capacity':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Crew:</strong>{` ${render.crew}`}</li>
                        <li><strong>Passengers:</strong>{` ${render.passengers}`}</li>
                        <li><strong>Cargo Capacity:</strong>{` ${render.cargo_capacity} kg`}</li>
                    </ul>
                )
            case 'Financials':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li><strong>Cost in Credits:</strong>{` ${render.cost_in_credits}`}</li>
                        <li><strong>Cosumables:</strong>{` ${render.consumables}`}</li>
                    </ul>
                )
        }

    }

    return (
        <div className="row w-100">
            <ul class="nav nav-tabs background-card rounded-top-4">
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'General' ? 'bg-light' : ''}`} name="General" onClick={(e) => setDisplay(e.target.name)} aria-current="page">General Information</button>
                </li>
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'Specs' ? 'bg-light' : ''}`} name='Specs' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Specifications</button>
                </li>
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'Capacity' ? 'bg-light' : ''}`} name='Capacity' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Capacity & Payload</button>
                </li>
                <li class="nav-item">
                    <button class={`buttons background-card regular p-3 fs-5 border-0 rounded-4 ${display === 'Financials' ? 'bg-light' : ''}`} name='Financials' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Financials & Operations</button>
                </li>
            </ul>

            <div className="content bg-light mt-0 align-items-center rounded-bottom-4">
                <div className="mt-3"> {displayContent()}</div>

            </div>
        </div>
    )
}


export default VehicleView;
