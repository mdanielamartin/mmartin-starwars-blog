
import React, { useContext } from "react"
import { useNavigate } from "react-router"
import Logo from "../../img/logo.png"
import { Context } from "../store/appContext"
import styles from "../../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faFloppyDisk, faHouse } from "@fortawesome/free-solid-svg-icons"
const NavBar = () => {

    const navigateTO = useNavigate();
    const { store, actions } = useContext(Context)
    const barNavigation = (e) => {
        navigateTO(e.target.name)
    }
    return (
        <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" name='/' onClick={barNavigation}>
                    <img src={Logo} className={styles.logo} alt="Site logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${styles.links}`} name='/' onClick={barNavigation} aria-current="page"><FontAwesomeIcon className="text-warning align-items-center me-2 mt-1" icon={faHouse} />Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${styles.links}`} name='/databank' onClick={barNavigation}><FontAwesomeIcon className="text-warning align-items-center me-2 mt-1" icon={faFloppyDisk} />Databank</a></li>
                        <li className="nav-item mx-2">
                            <a className={`nav-link ${styles.links}`} name='/favorites' onClick={barNavigation}><div className="d-flex me-2"><FontAwesomeIcon className="text-warning align-items-center me-2 mt-1" icon={faStar} /><span> {`${store.favorites.length}`} </span></div>Favorites</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar
