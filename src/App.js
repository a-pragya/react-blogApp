import React from 'react'
import './App.css';
import DisplayPosts from './components/DisplayPosts'
import AddPost from './components/AddPost'
//import  { withAuthenticator } from 'aws-amplify-react'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      < AddPost />
      < DisplayPosts/>
    </div>
  );
}

export default withAuthenticator(App,
  {includeGreetings: true});
