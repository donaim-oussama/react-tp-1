import Clock from './clock.js';
import PropFunc from './prop.js';
import PropTest from './propClass.js';
import Compt from './compteur.js';
import MiniForm from './miniForm.js';

function App(){
  return (
    <>
      C'est <Clock/>
      <PropFunc nom='Don' prenom ='Osm'/>
      <PropTest nom='Donaim' prenom='Oussama'/>
      <Compt/>

      <MiniForm></MiniForm>
    </>
  )
}

export default App;


/*
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

const nom = 'Don';
const prenom = 'Osm';
const temp = <div><p>C'est {new Date().toLocaleTimeString()}.</p></div>
const t = ReactDOM.render(temp, document.getElementById('root'))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Voici ma première page, je suis {prenom} {nom}
        </p>
        {temp}
        <p>{}</p>
      </header>
    </div>
  );
  //ReactDOM.render(temp, document.getElementById('root'))
}*/
/*const clcTarget = document.getElementById('root')
class App extends React.Component{
  constructor(){
    this.temps = {temps: new Date()}
  }

  componentDidMount(){
    this.setState({
      temps : new Date()
    })
  }

  timer(){
    
  }

  render(){
    return(
      <div>{new Date().toLocaleTimeString()}</div>
    )
    }
}

ReactDOM.render(App, clcTarget)



export default App;
*/


/*
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  // highlight-next-line
  //ReactDOM.render(element, document.getElementById('root'));
  function render(){
    const temp =new Date()
    return (
      <>
      <div className="test">
        <h1> {temp.toLocaleTimeString()}</h1>

      </div>
      </>
    );
  }
}

setInterval(App, 1000);


export default App;
*/