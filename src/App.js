import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
//let marked =require("marked");

class App extends Component {

      state =({
        markdown:"" 
      });

 

  update=(value)=>{

    this.setState({
      markdown:value
    })

  }


  render() {
    return (
      <div className="App">
        <textarea rows="20" cols="50" className="texte" value={this.state.markdown} onChange={(event)=>{this.update(event.target.value)}}></textarea>
        <div dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}} className="box"></div>
      </div>
    );
  }
}

export default App;
