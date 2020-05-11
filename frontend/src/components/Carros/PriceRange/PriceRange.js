import React, { useMemo, Fragment } from 'react'

import Dropdown from '../Dropdown/Dropdown'

function PriceRange(props) {

    const faixaValor = useMemo(
        () => [
          { ID: 1, PriceRangeID: 1, value: '0-20', Name: 'R$0 - R$20.000' },
          { ID: 2, PriceRangeID: 2, value: '20-40', Name: 'R$20.001 - R$40.000' },
          { ID: 3, PriceRangeID: 3, value: '40-60', Name: 'R$40.001 - R$60.000' },
          { ID: 4, PriceRangeID: 4, value: '60-100', Name: 'R$60.001 - R$100.000' },
        ],
        []
    )

    async function updatePriceRange(value) {
        await props.updatePriceRange(value)
    }

    return (
        <Fragment>
            <Dropdown subtitle="Faixa de Preço" items={faixaValor} priceRange={updatePriceRange} />
        </Fragment>
    )
}

export default PriceRange