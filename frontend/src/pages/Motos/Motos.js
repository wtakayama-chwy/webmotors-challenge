import React from 'react'
import { Fragment } from 'react'

import './Motos.scss'

import iconArrow from '../../assets/others/icon-arrow.svg'
import iconLocation from '../../assets/others/icon-location.svg'

import Header from '../../components/Header/Header'
import Options from '../../components/Options/Options'
import Checkbox from '../../components/Carros/Checkbox/Checkbox'
import Year from '../../components/Carros/Year/Year'
import Radius from '../../components/Carros/Radius/Radius'
import Marcas from '../../components/Carros/Marcas/Marcas'
import Modelos from '../../components/Carros/Modelos/Modelos'
import PriceRange from '../../components/Carros/PriceRange/PriceRange'
import Versions from '../../components/Carros/Versions/Versions'
import Vehicles from '../../components/Carros/Vehicles/Vehicles'

export default function Motos(props) {

    return (
        <Fragment>
            <Header />
            <div className="main-wrapper">
                <div className="top-options">
                    <Options match={props.match}/>
                    <button className="button-my-car">Vender minha Moto</button>
                </div>
                <div className="search-wrapper">
                    <div className="checkboxes">
                        <Checkbox title="Novos"
                        />
                        <Checkbox title="Usados"
                        />
                    </div>
                    <div className="input-filters">
                        <div className="sub-grid">
                            <img src={iconLocation} alt="" className="location-icon"/>
                            <input 
                                type="text"
                                name="local"
                                placeholder="Onde: São Paulo - SP"
                            />
                            <Radius />
                        </div>
                        <Marcas />
                        <Modelos />
                    </div>
                    <div className="input-filters_second">
                        <Year />
                        <PriceRange />
                        <Versions />
                        <Vehicles />
                    </div>
                    <div className="search-tools">
                        <span>
                            <img src={iconArrow} alt=""/>
                            <button className="advanced-search">Busca Avançada</button>
                        </span>
                        <button 
                            className="clean-filters"
                        >
                            Limpar Filtros
                        </button>
                        <button className="offers">
                            VER OFERTAS
                        </button>
                    </div>
                </div>                
            </div>        
        </Fragment>
    )
}
