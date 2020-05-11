import React, { Fragment } from 'react';
import { useEffect, useState, useCallback } from 'react';

import ApiService from '../../../services/ApiService';
import Dropdown from '../Dropdown/Dropdown';

import './Vehicles.scss';

function Vehicles() {
    
    const [vehicles, setVehicles] = useState();
    const apiService = ApiService;

    const getVehicles = useCallback(
        () => {
            apiService.ListVehicle(1)
            .then(res => {
                setVehicles(res);
            })
        },
        [apiService],
    )

    useEffect(() => {
        getVehicles();
    }, [getVehicles]);


    return (
        <Fragment>
            <div className="hidden">
                <Dropdown title="Veículos: " items={vehicles} />
            </div>
        </Fragment>
    )
}

export default Vehicles;