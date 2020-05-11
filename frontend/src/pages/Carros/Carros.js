import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Carros.scss'
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
import Search from '../../components/Carros/Search/Search'

function Carros(props) {

    // CHECKBOXES
    const [newChecked, setNewChecked] = useState(false)
    const [usedChecked, setUsedChecked] = useState(false)
    // RAIO 
    const [radius, setRadius] = useState()
    // MARCAS
    const [makeId, setMakeId] = useState()
    // MODELOS
    const [modelId, setModelId] = useState()
    // ANO
    const [year, setYear] = useState()
    // PRICE RANGE
    const [priceRange, setPriceRange] = useState()
    // VERSION
    const [versionId, setVersionId] = useState()

    function updateYear(value) { setYear(value)}
    function updateRadius(value) { setRadius(value)}
    function updatePriceRange(value) { setPriceRange(value)}
    function handleCleanFilter() {
        window.location.reload()
    }

    function handleClickOffers() {
        alert('Optei em usar o infinite loading!')
    }

    useEffect(() => {
        setMakeId(props.match.params.makeId)
        setModelId(props.match.params.modelId)
        setVersionId(props.match.params.versaoId)
        updateYear()
        updateRadius()
        updatePriceRange()
    }, [props])

    return (
        <Fragment>
            <Header />
            <div className="main-wrapper">
                <div className="top-options">
                    <Options match={props.match}/>
                    <button className="button-my-car">Vender meu carro</button>
                </div>
                <div className="search-wrapper">
                    <div className="checkboxes">
                        <Checkbox 
                            value={newChecked} 
                            onChange={event => setNewChecked(event.target.checked)} 
                            title="Novos"
                        />
                        <Checkbox 
                            value={usedChecked} 
                            onChange={event => setUsedChecked(event.target.checked)} 
                            title="Usados"
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
                            <Radius updateRadius={updateRadius}/>
                        </div>
                        <Marcas />
                        <Modelos makeId={makeId}/>
                    </div>
                    <div className="input-filters_second">
                        <Year updateYear={updateYear}/>
                        <PriceRange updatePriceRange={updatePriceRange}/>
                        <Versions modelId={modelId}/>
                        <Vehicles />
                    </div>
                    <div className="search-tools">
                        <span>
                            <img src={iconArrow} alt=""/>
                            <button className="advanced-search">Busca Avançada</button>
                        </span>
                        <Link to="/">
                            <button 
                                className="clean-filters"
                                onClick={handleCleanFilter}
                            >
                                Limpar Filtros
                            </button>
                        </Link>
                        <button 
                            className="offers" 
                            onClick={handleClickOffers}
                        >
                            VER OFERTAS
                        </button>
                    </div>
                </div>                
                <Search                     
                    priceRange={priceRange}
                    radius={radius} // There's no need (because of the API doesn't provide filter by radius)
                    year={year}
                    newChecked={newChecked} 
                    usedChecked={usedChecked}
                    makeId={makeId}
                    modelId={modelId}
                    versionId={versionId}
                />
            </div>        
        </Fragment>
    )

}

export default Carros