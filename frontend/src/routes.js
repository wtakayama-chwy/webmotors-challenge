import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Importando páginas
import Carros from './pages/Carros/Carros'
import Motos from './pages/Motos/Motos'
import NotFound from './pages/NotFound/NotFound'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Carros} />
                <Route path="/marca/:makeId" exact component={Carros} />
                <Route path="/marca/:makeId/modelo/:modelId" exact component={Carros} />
                <Route path="/marca/:makeId/modelo/:modelId/versao/:versaoId" exact component={Carros} />
                <Route path="/search-motos" component={Motos} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes