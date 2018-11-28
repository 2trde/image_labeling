import React, { Component } from 'react';
import './App.css';
import ImageLabelEditor from './ImageLabelEditor'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {log: []}
  }

  handleLabelDefined(result) {
    this.setState({log: [...this.state.log, `new point (${result.x}, ${result.y})`]})
  }

  render() {
    return (
      <div className="App">
        <ImageLabelEditor image_url='sample_image_1.jpg' label_type='point' label_color='red' onLabelDefinied={this.handleLabelDefined.bind(this)}/>

        <code>
          {this.state.log.map(line => <div>{line}</div>)}
        </code>
      </div>
    )
  }
}

export default App;
