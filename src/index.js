import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Clock from './Clock'
import './index.css'

class Index extends Component {
  constructor () {
    super()
    this.state = { isShowClock: true }
  }

  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render () {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或隐藏时钟
        </button>
      </div>
    )
  }
}
   
ReactDOM.render(
        <Index />,
        document.getElementById('root')
    )
