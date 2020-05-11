import React, { useState, useEffect, useCallback } from 'react'
import LinkWrapper from '../../services/LinkWrapper'

import iconCar from '../../assets/others/icon-car.svg'
import iconMoto from  '../../assets/others/icon-moto.svg'

import './Options.scss'

function Options(props) {

    const [selectCar, setSelectCar] = useState()
    const [selectMoto, setSelectMoto] = useState()
    const options = [
        { type: 'CARROS', path: '/' },
        { type: 'MOTOS', path: '/search-motos' }
    ]

    function selectedCar() {
        setSelectCar(true)
        setSelectMoto(false)
    }

    function selectedMoto() {
        setSelectCar(false)
        setSelectMoto(true)
    }

    const handleClick = useCallback(
        () => {
            if(props.match.path === options[0].path) { selectedCar() } 
            if(props.match.path === options[1].path) { selectedMoto() }
        },
        [props, options],
    )

    useEffect(() => {
        handleClick()
    }, [handleClick])


    return (
        <div className="opcoes-wrapper">
            <div className="opcao">
                <LinkWrapper to='/' className="link">
                    <div className="carros" onClick={handleClick}>
                        <img src={iconCar} alt="carro"/>
                        <div className="text-option">
                            <span>Comprar</span>
                            { selectCar ? <h1 className="selected">CARROS</h1> : <h1>CARROS</h1> }
                        </div>
                    </div>
                </LinkWrapper>
                { selectCar ? <hr/> : null }
            </div>
            <div className="opcao">
                <LinkWrapper to='/search-motos' className="link">
                <div className="motos" onClick={handleClick}>
                    <img src={iconMoto} alt="moto"/>
                    <div className="text-option">
                        <span>Comprar</span>
                        { selectMoto ? <h1 className="selected">MOTOS</h1> : <h1>MOTOS</h1> }
                    </div>
                </div>
                </LinkWrapper>
                { selectMoto ? <hr/> : null }
            </div>
        </div>
    )
}

export default Options