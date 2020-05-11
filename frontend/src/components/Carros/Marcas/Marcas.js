import React, { Fragment } from 'react';
import { useEffect, useState, useCallback } from 'react';

import ApiService from '../../../services/ApiService';
import Dropdown from '../Dropdown/Dropdown';

import './Marcas.scss'

function Marcas() {
    
    const [marcas, setMarcas] = useState();
    const apiService = ApiService;

    const getMakes = useCallback(
        () => {
            apiService.ListMakes()
            .then(res => {
                setMarcas(res);
            })
        },
        [apiService],
    ) 

    useEffect(() => {
        getMakes();
    }, [getMakes]);


    return (
        <Fragment>
            <Dropdown title="Marca: " subtitle="Todas" items={marcas} />
        </Fragment>
    )
}

export default Marcas;