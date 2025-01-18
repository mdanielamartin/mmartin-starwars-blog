import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import HomeImg from '../../img/hero.png'
import styles from '../../styles/home.module.css'
import { Context } from "../store/appContext";
import '../../styles/global.css'

const Home = () => {

    const { store, actions } = useContext(Context);
    const navigateTO = useNavigate();


    const handleNavigation = async (e) => {
        actions.setTab(e.target.name);
        const allOK = await actions.getDatabank(e.target.name);
        if (allOK) {
            navigateTO('/databank')
        }

    }


    return (
        < div className='container-fluid mb-4'>
            <div className='container bg-dark p-4 d-flex mt-4 rounded-4'>
                <div className='row d-flex mx-2'>
                    <div className='col-lg-6 col-sm-12 mt-4'>
                        <h1 className={styles.main}>Explore the Universe</h1>
                        <div className='buttongroup mt-5 d-flex justify-content-evenly'>
                            <button type="button" className={`btn btn-lg py-3 px-4 mx-1  ${styles.buttons} `} onClick={(e) => handleNavigation(e)} name='people'>Characters</button>
                            <button type="button" className={`btn btn-lg py-3 px-4 mx-1  ${styles.buttons}`} onClick={(e) => handleNavigation(e)} name='vehicles'>Vehicles</button>
                            <button type="button" className={`btn btn-lg py-3 px-4 mx-1  ${styles.buttons}`} onClick={(e) => handleNavigation(e)} name='planets'>Planets</button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 d-flex justify-content-center'>
                        <img className='w-100 h-auto' src={HomeImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
