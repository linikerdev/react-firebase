import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

export default class notAuthorizated extends Component {
    render() {
        return (
            <div>
                Não autorizado
                <hr />
                Acesse: <Link to={'/login'}><strong>Login</strong></Link>
            </div>
        )
    }
}