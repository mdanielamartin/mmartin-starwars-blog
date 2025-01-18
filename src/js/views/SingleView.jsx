import React, { useEffect, useContext, useState } from "react";
import '../../styles/global.css'
import styles from '../../styles/single.module.css'
import { Context } from "../store/appContext.js";
import PeopleView from "../component/PeopleView.jsx";
import PlanetView from "../component/PlanetView.jsx";
import VehicleView from "../component/VehicleView.jsx";


const SingleView = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('')

    useEffect(() => {
        const done = actions.getDetailsLocal();
        if (done) {
            setCategory(store.singleView.details.properties.url.split('/').at(-2))
            setLoading(false);
        }
    }, [])

    if (loading) {
        return (
            <div><h1 className='title text-center yellow'>Reloading item ...</h1></div>

        )
    }
    return (
        <div className="container-fluid">
            <div className='container bg-dark p-3 mt-4 rounded-4 d-flex justify-content-center'>
                <div className='row d-flex align-items-center justify-content-center h-100 w-100 '>
                    <div className='col-lg-7 col-md-6 col-sm-12 h-100 d-flex align-items-center'>
                        <div className={`${styles.faded} background-card align-items-center w-100`}>
                            <div className="mt-4">
                                <div className='title fs-1 text-black text-center'>{store.singleView.details.properties.name}</div>
                                <div className='text-center regular mt-0 '>
                                    <ul className="lh-lg">
                                        <li>{store.singleView.details.description}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-sm-12 h-100  d-flex align-items-center justify-content-end '>
                        <div className={` ${styles.fadedimg} w-100`}>
                            <img className="w-100" src={`https://starwars-visualguide.com//assets/img/${category === 'people' ? 'characters' : category}/${store.singleView.details.uid}.jpg`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex bg-dark mt-4 rounded-4 justify-content-center align-items-center'>
                {store.singleView.type === 'people' && <PeopleView />}
                {store.singleView.type === 'planets' && <PlanetView />}
                {store.singleView.type === 'vehicles' && <VehicleView />}
            </div>
        </div>
    )
}

export default SingleView
