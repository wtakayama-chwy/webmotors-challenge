import React, { useMemo, Fragment } from 'react'

import Dropdown from '../Dropdown/Dropdown'

function Year(props) {

    const anos = useMemo(
        () => [
            { ID: 1, YearID: 1, value: 2012, Name: '2012' },
            { ID: 2, YearID: 2, value: 2013, Name: '2013' },
            { ID: 3, YearID: 3, value: 2014, Name: '2014' },
            { ID: 4, YearID: 4, value: 2015, Name: '2015' },
            { ID: 5, YearID: 5, value: 2016, Name: '2016' },
            { ID: 6, YearID: 6, value: 2017, Name: '2017' },
            { ID: 7, YearID: 7, value: 2018, Name: '2018' },
        ],
        []
    )
    
    async function updateYear(value) {
        await props.updateYear(value)
    }
    
    return (
        <Fragment>
            <Dropdown subtitle="Ano Desejado:" items={anos} year={updateYear} />
        </Fragment>
    )
}

export default Year

// for(let ano=2010; ano < 2020; ano++) {
//     for(let i=1; i < 2020-2010; i++) {
//         year.push({
//             ID: i, AnoID: i
//         })
//     }
//     year.push({
//         value: ano, Name: `'${ano}'`
//     })
// }
// console.log(year)