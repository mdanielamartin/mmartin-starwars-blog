import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import CardView from '../component/CardView.jsx'


const DataBank = () => {
    const { store, actions } = useContext(Context);
    const [request, setRequest] = useState(store.tab);

    const handleStart = async () => {
        await actions.getDatabank(request)
    }

    const handleNext = async () => {
        await actions.getNext(request)
    }

    const handlePrev = async () => {
        await actions.getPrev(request)
    }

    const handleRequest = (e) => {
        setRequest(e.target.name)
        actions.setTab(e.target.name)
    }
    useEffect(() => {
        handleStart();
    }, [request])

    useEffect(() => {
        actions.getFavLocal();
    }, [])


    return (
        < div className="container-fluid bg-dark h-100 w-100 mt-4 mx-2 rounded-4" >

            <div className="row d-flex justify-content-center pt-4">
                <div className="col-12 d-flex justify-content-center">
                    <button name='people' className={`btn buttons rounded-pill mx-4 ${request === 'people' ? 'bg-light' : ''}`} onClick={(e) => handleRequest(e)}>Characters</button>
                    <button name='vehicles' className={`btn buttons rounded-pill mx-4 ${request === 'vehicles' ? 'bg-light' : ''}`} onClick={(e) => handleRequest(e)}>Vehicles</button>
                    <button name='planets' className={`btn buttons rounded-pill mx-4 ${request === 'planets' ? 'bg-light' : ''}`} onClick={(e) => handleRequest(e)}>Planets</button>
                </div>
            </div>

            <div className="container d-flex p-4">

                <div className="row">
                    <div className="col-1">
                        <button type="button" onClick={handlePrev} className="btn buttons w-auto px-2">{`<<Previous`}</button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center g-4 mt-4">
                    {store[request].results?.map((item, index) => {
                        let fav = store.favorites.some(favItem => favItem.url === item.url)
                        if (store[request].results.length < 3) {
                            return (<div className="col justify-content-center align-items-center" key={item.url} ><CardView dato={item} status={fav} /></div>)
                        }

                        return (
                            <div className="col-lg-4 justify-content-center align-items-center" key={item.url} ><CardView dato={item} status={fav} /></div>
                        )
                    })}
                </div>

                <div className="row">
                    <div className="col-1">
                        <button type="button" onClick={handleNext} className="btn buttons w-auto px-2">{`Next>>`}</button>
                    </div>
                </div>
            </div>


        </div >)
}

export default DataBank
