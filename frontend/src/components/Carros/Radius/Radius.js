import React, { useMemo, Fragment } from 'react'

import Dropdown from '../Dropdown/Dropdown'

function Radius(props) {

    const raio = useMemo(
        () => [
          { ID: 1, RadiusID: 1, value: 0, Name: '0km' },
          { ID: 2, RadiusID: 2, value: 50, Name: '50km' },
          { ID: 3, RadiusID: 3, value: 100, Name: '100km' },
          { ID: 4, RadiusID: 4, value: 200, Name: '200km' },
        ],
        []
    )

    async function updateRadius(value) {
        await props.updateRadius(value)
    }

    return (
        <Fragment>
            <Dropdown title="Raio: " subtitle="100km" items={raio} radius={updateRadius}/>
        </Fragment>
    )
}

export default Radius