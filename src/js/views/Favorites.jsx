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
            <h1 className='text-center title yellow fs-2 mt-4'>Favorites</h1>
            <div className="container d-flex p-4">
                <div className="row d-flex g-4 mt-4 w-100">
                    {store.favorites.map((item, index) => {
                        let fav = store.favorites.some(favItem => favItem.url === item.url)
                        return (
                            <div className="col-3" key={`${item.url}fav`} ><CardView dato={item} status={fav} /></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Favorites;
