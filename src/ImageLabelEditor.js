import React from 'react'
import {StyleSheet} from 'react'

/*
 * TODO:
 * let the User select a point or a rectangle 
 * let the use move the point or rectangle later (click-able edges of the rectangle)
 * show a submit-button that sends the result to the parent
 */
export default class ImageLabelEditor extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {}
  }

  handleSubmit() {
    this.props.onLabelDefinied({x: this.state.point_x, y: this.state.point_y})
  }

  render() {
    return (
      <div>
        <div className='image-container'>
          <img src={this.props.image_url}/>
          <div className='bounding-box'>
            <div className='handle handle-tl'/>
            <div className='handle handle-br'/>
          </div>
          <div className='point'>
            <span>Point1</span>
          </div>
        </div>
        <p>Here we will enable you to select points/boxes later</p>
        <p>But for now you have to enter coordinates</p>
        <div>
          X-Coordinate
          <input value={this.state.point_x} onChange={({target: {value}}) => this.setState({point_x: value})} />
        </div>
        <div>
          Y-Coordinate
          <input value={this.state.point_y} onChange={({target: {value}}) => this.setState({point_y: value})} />
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}


