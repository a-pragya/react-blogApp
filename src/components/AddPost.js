import { API, graphqlOperation } from 'aws-amplify'
import React, { Component } from 'react'
import { createPost } from '../graphql/mutations'

class AddPost extends Component{
    state ={
        postOwner: "",
        postOwnerUsername: "",
        postTitle: "",
        postBody: ""
    }

    componentDidMount = async() => {
        //Todo
    }

    handleChangePost = event => this.setState({
        [event.target.name] : event.target.value
    })

    handleAddPost = async event =>{
        event.preventDefault()

        const input = {
            postOwnerId: "pasdsw4343",//this.state.postOwnerId,
            postOwnerUsername: "pogo",//this.state.postOwnerUsername,
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            createdAt: new Date().toISOString()
        }

        await API.graphql(graphqlOperation(createPost, { input }))
        this.setState({ postTitle: "", postBody: ""})

    }
    render(){
        return(
            <form className="add-post"
            onSubmit={this.handleAddPost}>

                <input style={{ font: "19px"}} 
                type="text" placeholder="Title"
                name="postTitle"
                required 
                value = {this.state.postTitle}
                onChange={this.handleChangePost}/>

                <textarea
                    type="text"
                    name="postBody"
                    rows="3"
                    cols="40"
                    required
                    placeholder="New Blog Post"
                    value={this.state.postBody}
                    onChange={this.handleChangePost}/>

                <input type="submit"
                    className="btn"
                    style={{fontSize:"19px"}} />


            </form>
        )
    }
}

export default AddPost