import React, { Fragment } from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'

import './Search.scss'
import Loading from '../../Loading/Loading'
import ApiService from '../../../services/ApiService'

function Search(props) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const [vehicles, setVehicles] = useState([])
    const [search, setSearch] = useState(false)
    const [filteredVehicles, setFilteredVehicles] = useState([])
    const apiService = ApiService

    const isFiltered = useCallback(
        () => {
            if(props.newChecked || props.usedChecked || props.year || props.priceRange || props.makeId || props.modelId) {
                return true
            } else {
                return false
            }
        },
        [props],
    )
     
    const getVehicles = useCallback(
        () => {
            apiService.ListVehicle(pageNumber)
            .then(res => {
                setVehicles(prevVehicles => {
                    if(isFiltered) {
                        return [...new Set([...prevVehicles, ...res])]
                    } else {
                        return null
                    }
                })
                setHasMore(res.length > 0)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
                throw new Error (error)
            })
        },
        [apiService, pageNumber, error],
    )
    
    // Infinite loading by page - 10 in 10 vehicles
    // Observe page position
    const observer = useRef()
    const lastVehicleElement = useCallback(node => {
        if(loading) 
        return 
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, hasMore])


    const filterVehicles = useCallback(
        (vehicles) => {
            /* Radius - Just optional for this test
        if(props.radius) {}
        */

        // Make
        if(props.makeId) {
        let makeName = ''
        if(parseInt(props.makeId) === 1) { makeName = 'Chevrolet' }
        if(parseInt(props.makeId) === 2) { makeName = 'Honda' }
        if(parseInt(props.makeId) === 3) { makeName = 'Ford' }

        const filterMakes = vehicles.filter(
            vehicle => (vehicle.Make === makeName)
        )
        setFilteredVehicles(filterMakes)
        }

        // Model
        if(props.modelId) {
            let modelName = ''
            if(parseInt(props.modelId) === 1) { modelName = 'Agile' }
            if(parseInt(props.modelId) === 2) { modelName = 'Astra' }
            if(parseInt(props.modelId) === 3) { modelName = 'Onix' }
            if(parseInt(props.modelId) === 4) { modelName = 'City' }
            if(parseInt(props.modelId) === 5) { modelName = 'CRV' }
            if(parseInt(props.modelId) === 6) { modelName = 'Fit' }
            if(parseInt(props.modelId) === 7) { modelName = 'Ecosport' }
            if(parseInt(props.modelId) === 8) { modelName = 'Fussion' }

            const filterModels = vehicles.filter(
                vehicle => (vehicle.Model === modelName) 
            )
            setFilteredVehicles(filterModels)
        }

        // Version
        if(props.versionId) {
            let versionName = ''
            if(parseInt(props.versionId) === 6) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 10) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 11) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 12) { versionName = '1.5 LX 16V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 14) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 15) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 16) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 17) { versionName = '1.5 LX 16V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 18) { versionName = '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 19) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 21) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 22) { versionName = '1.5 LX 16V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 24) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 25) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 26) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 27) { versionName = '1.5 LX 16V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 28) { versionName = '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 29) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 30) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 31) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 32) { versionName = '1.5 LX 16V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 33) { versionName = '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 34) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 35) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 38) { versionName = '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 39) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 40) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 41) { versionName = '1.5 DX 16V FLEX 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 42) { versionName = '1.5 LX 16V FLEX 4P MANUAL'}
            if(parseInt(props.versionId) === 43) { versionName = '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'}
            if(parseInt(props.versionId) === 44) { versionName = '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'}
            if(parseInt(props.versionId) === 45) { versionName = '1.0 MPI EL 8V FLEX 4P MANUAL'}

            const filterVersions = vehicles.filter(
            vehicle => (vehicle.Name === versionName) 
        )
        setFilteredVehicles(filterVersions)
        }

        // Year
        if(props.year) {
            const filterYear = vehicles.filter(
                vehicle => (vehicle.YearFab === parseInt(props.year))
            )
            setFilteredVehicles(filterYear)
        }

        // Price Range
        if(props.priceRange) {
            
            let prices = props.priceRange.split('-')
            let priceMin = parseInt(prices[0])
            let priceMax = parseInt(prices[1])

            const filterMin = vehicles.filter(
                vehicle => ((parseInt(vehicle.Price)/1000) > priceMin)
            )
            const finalFilter = filterMin.filter(
                vehicle => ((parseInt(vehicle.Price)/1000) < priceMax)
            )
            setFilteredVehicles(finalFilter)
        }

        // Both checkboxes true
        if(!props.newChecked & !props.usedChecked) {
            return null
        } else {
            // Checkbox new True
            if(props.newChecked & !props.usedChecked) {
                const filterNew = vehicles.filter(
                    vehicle => !vehicle.KM
                ) 
                setFilteredVehicles(filterNew)
            }
            // Checkbox used True
            if(props.usedChecked & !props.newChecked) {
                const filterUsed = vehicles.filter(
                    vehicle => vehicle.KM
                )
                setFilteredVehicles(filterUsed)
            }
        } 
        if(props.newChecked & props.usedChecked) {
            setFilteredVehicles(vehicles)
        }     
        },
        [props],
    )

    useEffect(() => {
        isFiltered()
    },[isFiltered])

    useEffect(() => {
        setLoading(true)
        setError(false)
        getVehicles()        
    }, [search, getVehicles])    

    useEffect(() => {
        filterVehicles(vehicles)
    }, [vehicles, filterVehicles])


    /* I prefered to implement a dynamic filter
    async function handleClick() {

        setVehicles([])

        let totalPages = 3;
        for(let i=1; i <= totalPages; i++) {
            await apiService.ListVehicle(i)
                .then(res => {
                    setVehicles(prevVehicles => {  
                        return [...new Set([...prevVehicles, ...res])] 
                    })
                })
        }
        filterVehicles(vehicles)
        setVehicles(filteredVehicles)
        setSearch(true)        
    }
    */

    return (
        <Fragment>
            {/* <button onClick={() => handleClick()}>Buscar</button>   */}
            { isFiltered() ? (
                <div>
                <h1 className="filtered">Filtrados</h1>
                <div className="grid">
                    { filteredVehicles.map(vehicle => (
                        <div className="vehicle-card-item" key={vehicle.ID}>
                            <ul>
                                <li>
                                    <img src={vehicle.Image} alt={vehicle.Make}/>
                                    <div className="vehicle-details">
                                        <div className="vehicle-main-info">
                                            <h2>{vehicle.Make} {vehicle.Model}</h2>
                                            <h3>{vehicle.Version}</h3>
                                        </div>
                                        <div className="vehicle-price">
                                            <strong>R${vehicle.Price}</strong>
                                        </div>
                                        <div className="year-and-km">
                                            <h4>{vehicle.YearFab} / {vehicle.YearModel}</h4>
                                            <h3>{vehicle.KM} km</h3> 
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>   
                    ))
                    }
                </div>
                </div>
            ) : (
                // { search &&
                <div className="grid">
                    { vehicles.map((vehicle, index) => { 
                        if (vehicles.length === index + 1) { 
                        return <div className="vehicle-card-item" ref={lastVehicleElement} key={vehicle.ID}>
                            <ul>
                                <li>
                                    <img src={vehicle.Image} alt={vehicle.Make}/>
                                    <div className="vehicle-details">
                                        <div className="vehicle-main-info">
                                            <h2>{vehicle.Make} {vehicle.Model}</h2>
                                            <h3>{vehicle.Version}</h3>
                                        </div>
                                        <div className="vehicle-price">
                                            <strong>R${vehicle.Price}</strong>
                                        </div>
                                        <div className="year-and-km">
                                            <h4>{vehicle.YearFab} / {vehicle.YearModel}</h4>
                                            <h3>{vehicle.KM} km</h3> 
                                        </div>
                                    </div>
                                </li>
                            </ul> 
                            { loading ? ( <Loading /> ): null} 
                        </div> 
                        } else {
                        return <div className="vehicle-card-item" key={vehicle.ID}>
                            <ul>
                                <li>
                                    <img src={vehicle.Image} alt={vehicle.Make}/>
                                    <div className="vehicle-details">
                                        <div className="vehicle-main-info">
                                            <h2>{vehicle.Make} {vehicle.Model}</h2>
                                            <h3>{vehicle.Version}</h3>
                                        </div>
                                        <div className="vehicle-price">
                                            <strong>R${vehicle.Price}</strong>
                                        </div>
                                        <div className="year-and-km">
                                            <h4>{vehicle.YearFab} / {vehicle.YearModel}</h4>
                                            <h3>{vehicle.KM} km</h3> 
                                        </div>
                                    </div>
                                </li>
                            </ul>  
                        </div> 
                        }
                    })}
                </div>
            )}     
        </Fragment>
    )
}

export default Search