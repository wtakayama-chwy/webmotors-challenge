import React from 'react';
import LinkWrapper from '../../services/LinkWrapper';

import logo from '../../assets/logo/webmotors-logo.svg';
import searchIcon from '../../assets/header/search.svg';
import deafultUser from '../../assets/header/photo-default-user.png';
import heartIcon from '../../assets/header/heart.svg';
import chatIcon from '../../assets/header/chat.svg';
import notificationIcon from '../../assets/header/notification.svg';

import './Header.scss';

const Header = () => {
    return ( 
        <header>
            <div className="header-wrapper fixed">
                <div className="logo-container">
                    <LinkWrapper to="/" activeStyle={{}}>
                        <img src={logo} alt="Webmotors Logo" className="webmotors-logo"/>
                    </LinkWrapper>
                </div>
                <div className="searchBar">
                    <div className="searchBar-input-container">
                        <img src={searchIcon} alt="buscar"/>
                        <input type="text" 
                            className="searchBar-input" 
                            placeholder="Digite marca ou modelo do carro" 
                            id="searchBar" 
                            autoComplete="off" 
                        />
                    </div>
                </div>
                <nav className="menu">
                    <div className="menu-user">
                        <ul className="menu-list">
                            <li className="navigation-item">Comprar</li>
                            <li className="navigation-item">Vender</li>
                            <li className="navigation-item">Serviços</li>
                            <li className="navigation-item">Ajuda</li>
                            <li className="navigation-item not-logged">
                                <img src={deafultUser} alt="default user" className="icon-default-user" /> Entrar
                            </li>
                            <div>
                                <LinkWrapper to="/lista-de-favoritos">
                                    <img src={heartIcon} alt="lista favoritos" className="icon" />
                                </LinkWrapper>
                            </div>
                            <div>
                                <LinkWrapper to="/garagem/propostas/compra">
                                    <img src={chatIcon} alt="chat" className="icon" />
                                </LinkWrapper>
                            </div>
                            <div>
                                <img src={notificationIcon} alt="notificação" className="icon" />
                            </div>
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    );
}

export default Header;