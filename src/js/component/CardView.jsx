import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import '../../styles/global.css'
import styles from '../../styles/card.module.css'
import { Context } from "../store/appContext";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const CardView = ({ dato, status }) => {

    const { store, actions } = useContext(Context);
    const initialRender = useRef(true);
    const navigateTO = useNavigate();
    const [fav, setFav] = useState(status);

    const toSingleView = async (url) => {
        let allOk = await actions.getDetails(url);
        await actions.getPlanet(store.singleView.details.properties.homeworld)
        if (allOk) {
            navigateTO('/single')
        }
    }

    const selectFav = (dato) => {
        setFav(prev => !prev);

        if (fav) {
            actions.addFav(dato)
        } else {
            actions.removeFav(dato)
        }
    }

    useEffect(() => {

        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        if (fav) {
            actions.addFav(dato)
        } else {
            actions.removeFav(dato)
        }
    }, [fav])


    return (
        <div className={`card px-0 mx-0 ${styles.cardsize}`}>
            <img src={`https://starwars-visualguide.com//assets/img/${dato.url.split('/').at(-2) === 'people' ? 'characters' : dato.url.split('/').at(-2)}/${dato.uid}.jpg`} className={`card-img-top w-100 ${styles.image}`} alt="Star Wars Image" />
            <div className="card-body text-center mt-2">
                <h5 className="card-title title text-dark fs-6">{dato.name}</h5>
                <div className="d-flex h-100 justify-content-between align-self- mt-2">
                    <button className="btn rounded-pill buttons regular" onClick={() => toSingleView(dato.url)}>Learn More</button>
                    <button className="btn buttons rounded-pill" onClick={() => selectFav(dato)}><FontAwesomeIcon icon={faStar} className={fav ? "text-dark" : "text-white"} /></button>
                </div>
            </div>
        </div>
    )
}


export default CardView;
