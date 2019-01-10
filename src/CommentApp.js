import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component {

    constructor(){
      super()
      this.state = {
        comments: []
      }
    }

    componentWillMount () {
      this._loadComments()
    }
  
    // 将字符串转换为对象，加载到页面
    _loadComments () {
      let comments = localStorage.getItem('comments')
      if (comments) {
        comments = JSON.parse(comments)
        this.setState({ comments })
      }
    }
  
    // 将对象转换为字符串
    _saveComments (comments) {
      localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleDeleteComment (index) {
      // 获取评论列表数据
      const comments = this.state.comments
      // 删除
      comments.splice(index, 1)
      // 要删除的项目数量
      this.setState({ comments })
      this._saveComments(comments)
    }

    // 提交数据时一并保存到本地存储
    handleSubmitComment (comment) {
      if (!comment) return
      if (!comment.username) return alert('请输入用户名')
      if (!comment.content) return alert('请输入评论内容')
      const comments = this.state.comments
      // 添加评论
      comments.push(comment)
      this.setState({
        comments: this.state.comments
      })
      this._saveComments(comments)
    }

    render() {
        return (
          <div className="wrapper">
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
            <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
          </div>
        )
      }

}

export default CommentApp