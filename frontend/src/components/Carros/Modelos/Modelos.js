import React, { Fragment } from 'react';
import { useEffect, useState, useCallback } from 'react';

import ApiService from '../../../services/ApiService';
import Dropdown from '../Dropdown/Dropdown';

import './Modelos.scss';

function Modelos(props) {
    
    const [modelos, setModelos] = useState();
    const apiService = ApiService;

    const getModel = useCallback(
        () => {
            apiService.ListModel(props.makeId)
            .then(res => {
                setModelos(res);
            })
        },
        [apiService, props],
    )

    useEffect(() => {
        getModel();
    }, [getModel]);


    return (
        <Fragment>
            <Dropdown title="Modelo: " subtitle="Todos" items={modelos} props={props}/>
        </Fragment>
    )
}

export default Modelos;