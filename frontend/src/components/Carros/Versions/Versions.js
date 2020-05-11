import React, { Fragment } from 'react';
import { useEffect, useState, useCallback } from 'react';

import ApiService from '../../../services/ApiService';
import Dropdown from '../Dropdown/Dropdown';

import './Versions.scss'

function Versions(props) {

    const [versions, setVersions] = useState();
    const apiService = ApiService;

    const getVersions = useCallback(
        () => {
            apiService.ListVersion(props.modelId)
            .then(res => {
                setVersions(res);
            })
        },
        [apiService, props],
    )

    useEffect(() => {
        getVersions();
    }, [getVersions])


    return (
        <Fragment>
            <Dropdown title="Versões: " subtitle="Todas" items={versions} props={props}/>
        </Fragment>
    )
}

export default Versions;