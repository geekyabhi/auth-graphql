import React,{ Component } from "react";
import AuthForm from "./AuthForm";
import { compose, graphql } from 'react-apollo'
import mutation from '../mutation/login'
import query from '../queries/currentUser'

class LoginForm extends Component{

    constructor(props){
        super(props)

        this.state={errors:[]}
    }

    onSubmit({email,password}){
        this.props.mutate({
            variables:{email,password},
            refetchQueries:[{query}]
        }).catch((res)=>{
            const errors=res.graphQLErrors.map(error=>error.message)
            this.setState({errors})
        })
    }

    render(){
        return(
            <div>
                <h3></h3>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)} 
                >
                </AuthForm>
            </div>
        )
    }
}

export default graphql(mutation)(LoginForm)