import React, { useState } from "react";




const TabsNav = () => {
    const [display, setDisplay] = useState('Locations');


    const displayContent = () => {
        switch (display) {
            case 'Locations':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li>House</li>
                        <li>Earth</li>
                        <li>Blanket</li>
                    </ul>
                )
            case 'Affiliations':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li>4Geeks</li>
                        <li>GitHub</li>
                        <li>Blanket</li>
                    </ul>
                )
            case 'Appearances':
                return (
                    <ul class="regular fs-5 lh-lg">
                        <li>Rigo Skywalker: The Movie</li>
                        <li>Surprinsinly, Rigo Skywalker II</li>
                        <li>Nobody asked for it but he delivers: RS III</li>
                    </ul>
                )
        }

    }

    return (
        <div className="row w-100">
            <ul class="nav nav-tabs background-card rounded-top-4">
                <li class="nav-item">
                    <button class="buttons background-card regular p-3 fs-5 border-0 rounded-4" name="Locations" onClick={(e) => setDisplay(e.target.name)} aria-current="page">Locations</button>
                </li>
                <li class="nav-item">
                    <button class="buttons background-card regular p-3 fs-5 border-0 rounded-4" name='Affiliations' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Affiliations</button>
                </li>
                <li class="nav-item">
                    <button class="buttons background-card regular p-3 fs-5 border-0 rounded-4" name='Appearances' onClick={(e) => setDisplay(e.target.name)} aria-current="page">Appearances</button>
                </li>
            </ul>

            <div className="content bg-light mt-0 align-items-center rounded-bottom-4">
                <div className="mt-3"> {displayContent()}</div>

            </div>
        </div>
    )
}


export default TabsNav;
