import React from 'react';
import PropTypes from 'prop-types';

class CreateComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            content: '',
            number: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            user: event.target.value,
        })
    }
    handleTextChange(event) {
        this.setState({
            content: event.target.value,
        })
    }
    handleAgeChange(event) {
        this.setState({
            number: event.target.value,
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onCommentSubmit({
            user: this.state.user,
            content: this.state.content,
            number: this.state.number,
        });
        this.setState({
            user: '',
            content: '',
            number: 0,
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='createComment'>
                <input value={this.state.user} onChange={this.handleChange} placeholder='Name' type='text' />
                <input value={this.state.content} onChange={this.handleTextChange} placeholder='Comment' type='text' />
                <input value={this.state.number} onChange={this.handleAgeChange} placeholder='Age' type='number' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments || [],
        }
        this.addComment = this.addComment.bind(this);
    }
    addComment(comment) {
        comment.id = Date.now();
        console.log(comment)
        this.setState({
            comments: this.state.comments.concat([comment]),
        })
    }
    render() {
        return (
            <div className='commentBox'>
                {this.state.comments.length} comments
                {this.state.comments.map((comment) => {
                    return (
                        <Comment user={comment.user} key={comment.id}>
                            {comment.content} - {comment.number}
                        </Comment>
                    )
                })}
                <CreateComment onCommentSubmit={this.addComment} />
            </div>
        )
    }
}
CreateComment.propTypes = {
    onCommentSubmit: PropTypes.func,
}

CommentBox.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.user + " : "}</h2>
                <span className="commentContent">{this.props.content}</span>
                <span className="commentAge">{this.props.number}</span>
            </div>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    number: PropTypes.number,
};

export default CommentBox;