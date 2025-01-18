import React, { useContext, useEffect } from 'react'
import CardView from '../component/CardView.jsx'
import { Context } from "../store/appContext";
import '../../styles/global.css'

const Favorites = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getFavLocal();
    }, [])

    return (
        <div>
            <div className="container d-flex p-4">
                <div className="row d-flex g-4 mt-4 w-100">
                    {store.favorites.map((item, index) => {
                        return (
                            <div className="col-3" key={index} ><CardView dato={item} status={true} /></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Favorites;
