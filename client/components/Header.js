import gql from 'graphql-tag'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import query from '../queries/currentUser'
import {Link} from 'react-router'
import mutation from '../mutation/logout'

class Header extends Component{


    onLogoutClick(){
        this.props.mutate({
            refetchQueries:[{query}]
        })
    }

    renderButtons(){
        const {loading,user}=this.props.data
        if(loading){return <div></div>}
        if(user){
            return  <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
        }else{
            return(
                <div>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>    
                </div>
            )
        }
    }

    render(){
        return(
            <nav>
                <Link to="/" className="brand-logo left">Home</Link>
                <div className="nav-wrapper">
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default  graphql(mutation)(graphql(query)(Header))