import React from 'react'
import { useState, useEffect } from 'react'
import onClickOutside from 'react-onclickoutside'

import './Dropdown.scss'

import arrowIconDown from '../../../assets/carros/dropdown-menu-arrow-down.svg'
import arrowIconUp from '../../../assets/carros/dropdown-menu-arrow-up.svg'
import LinkWrapper from '../../../services/LinkWrapper'

function Dropdown(
    { 
        title, 
        subtitle, 
        items = [], 
        multiSelect = false, 
        props, 
        year,
        radius,
        priceRange
    }
    ) {
    
    let [type] = useState()
    const [show, setShow] = useState()
    // Filters
    const [makeId, setMakeId] = useState()
    const [modelId, setModelId] = useState()
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const toggle = () => setOpen(!open)
    Dropdown.handleClickOutside = () => setOpen(false)
    
    useEffect(() => {
        if(props) {
            setMakeId(props.makeId)
            setModelId(props.modelId)
        }
    }, [props])

    async function handleYear(value) {
        await year(value)
    }
    async function handleRadius(value) {
        await radius(value)
    }
    async function handlePriceRange(value) {
        await priceRange(value)
    }

    async function handleOnClick(item) {        

        if (!selection.some(current => current.id === item.id)) {
          if (!multiSelect) {
            // YEAR
            if(item.YearID) { handleYear(item.value) }
            if(item.RadiusID) { handleRadius(item.value) }
            if(item.PriceRangeID) { handlePriceRange(item.value) }
            setSelection([item])
            toggle(!open)
            setShow(true)

          } else if (multiSelect) {
            setSelection([...selection, item])
          }
        } else {
          let selectionAfterRemoval = selection
          selectionAfterRemoval = selectionAfterRemoval.filter(
            current => current.id !== item.id
          )
          toggle(!open)
          setSelection([...selectionAfterRemoval])
          setShow(true)
        }
    }
      
    function isItemInSelection(item) {
        findType(item)
        if (selection.find(current => current.ID === item.ID)) {
            return true
        }
        return false
    }

    function findType(item) {

        if(item.ModelID) {
            type = 'Versão'
        }
        if(item.MakeID) {
            type = 'Modelo'
        }    
        if(!item.ModelID && !item.MakeID &&! item.RadiusID && !item.YearID && !item.PriceRangeID) {
            type = 'Marca'
        }
        if(item.RadiusID) {
            type = 'Raio'
        }
        if(item.YearID) {
            type = 'Ano'
        }
        if(item.PriceRangeID) {
            type = 'PriceRange'
        }
    }

    return(

        <div className="wrapper">
            <div 
                tabIndex={0} 
                className="header" 
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="header_title">
                    {items.map(item => (
                      <p className="header_title-bold_selected" key={item.ID}>
                            { isItemInSelection(item) && `${item.Name}`}
                      </p>
                    ))}
                    {   
                        show ? ( null ) 
                        : (
                            <p className="header_title">
                                <strong>{title}</strong>{ subtitle }
                            </p>   
                        )
                    }
                </div>
                <div className="header_action">
                    <img src={open ? `${arrowIconUp}` : `${arrowIconDown}`} alt="icon-dropdown"></img>
                </div>
            </div>
            {/* RAIO */}
            {type === 'Raio' && (
                open && (
                    <ul className="list">
                        {items.map(item => (
                            <li className="list-item" key={item.ID}>
                                {/* <LinkWrapper to={`/raio/${item.Name}`}> */}
                                    <button 
                                        type="button" 
                                        onClick={() => handleOnClick(item)}
                                    >
                                        <span>{item.value}km</span>
                                        <span>{isItemInSelection(item) && '<<'}</span>                                    
                                    </button>
                                {/* </LinkWrapper> */}
                            </li>
                        ))}
                    </ul>
                )
            )
            }
            {/* MARCAS */}
            {type === 'Marca' && (
                open && (
                    <ul className="list">
                        {items.map(item => (
                            <li className="list-item" key={item.ID}>
                                {/* <LinkWrapper to={`/marca/${item.ID}`} > */}
                                <LinkWrapper to={`/marca/${item.ID}`} >
                                    <button 
                                        type="button" 
                                        onClick={() => handleOnClick(item)}
                                    >
                                        <span>{item.Name}</span>
                                        <span>{isItemInSelection(item) && '<<'}</span>                                    
                                    </button>
                                </LinkWrapper>
                            </li>
                        ))}
                    </ul>
                )
            )}
            {/* MODELOS */}
            {type === 'Modelo' && (
                open && (
                    <ul className="list">
                        {items.map(item => (
                            <li className="list-item" key={item.ID}>
                                <LinkWrapper to={`${makeId}/modelo/${item.ID}`} >
                                    <button 
                                        type="button" 
                                        onClick={
                                                () => handleOnClick(item)
                                                }
                                    >
                                        <span>{item.Name}</span>
                                        <span>{isItemInSelection(item) && '<<'}</span>                                    
                                    </button>
                                </LinkWrapper>
                            </li>
                        ))}
                    </ul>
                )
            )}
            {/* ANO */}
            {type === 'Ano' && (
                open && (
                    <ul className="list">
                        {items.map(item => (
                            <li className="list-item" key={item.ID}>
                                {/* <LinkWrapper to={`/ano/${item.value}`}> */}
                                    <button 
                                        type="button" 
                                        onClick={() => handleOnClick(item)}
                                    >
                                        <span>{item.value}</span>
                                        <span>{isItemInSelection(item) && '<<'}</span>                                    
                                    </button>
                                {/* </LinkWrapper> */}
                            </li>
                        ))}
                    </ul>
                )
            )
            }
            {/* PRICE RANGE */}
            {type === 'PriceRange' && (
                open && (
                    <ul className="list">
                        {items.map(item => (
                            <li className="list-item" key={item.ID}>
                                {/* <LinkWrapper to={`/preco/${item.value}`}> */}
                                    <button 
                                        type="button" 
                                        onClick={() => handleOnClick(item)}
                                    >
                                        <span>{item.Name}</span>
                                        <span>{isItemInSelection(item) && '<<'}</span>                                    
                                    </button>
                                {/* </LinkWrapper> */}
                            </li>
                        ))}
                    </ul>
                )
            )
            }
            {/* VERSÕES */}
            {type === 'Versão' && (
                open && (
                    <ul className="list">
                        {items.map(item => (
                            <li className="list-item" key={item.ID}>
                                <LinkWrapper to={`${modelId}/versao/${item.ID}`} >
                                    <button 
                                        type="button" 
                                        onClick={
                                                () => handleOnClick(item)
                                                }
                                    >
                                        <span>{item.Name}</span>
                                        <span>{isItemInSelection(item) && '<<'}</span>                                    
                                    </button>
                                </LinkWrapper>
                            </li>
                        ))}
                    </ul>
                )
            )}
        </div>
    )
}

const clickOutsideConfig = {
    
    handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)

