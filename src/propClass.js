import React from "react"
class PropTest extends React.Component{
    render(){
        return <h4>Me voila {this.props.nom} {this.props.prenom}</h4>
    }
}

export default PropTest;