
import { Component } from "react";
import React from "react"

class MiniForm extends Component{



    state = {
      showMessage: false
    };
    clic = () => { 
        this.setState({showMessage: true});
        this.nom = document.getElementById('nom').value
        this.age = document.getElementById('age').value
    };
  
    render(){ 
      return(
          <>
        <input id="nom" type="text" placeholder="Nom"/>
        <input id="age" type="number" placeholder="Age" min="15"/>
        <button onClick={this.clic}>Afficher</button>
        {this.state.showMessage && <p>Hello, {this.nom} vous avez {this.age} ans</p>}
        
        </>
      );
  
    }
  }
  
  export default MiniForm;