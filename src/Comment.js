import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    // 设置参数类型必须是一个对象
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render() {
        return (
    <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
    </div>
        )
    }
} 

export default Comment