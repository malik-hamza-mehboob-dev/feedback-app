import React from 'react'

export default function App() {
    const title = 'Blog Post';
    const body  = 'This is my blog';

    const comments = [
        {id:1,text:'comment one'},
        {id:2,text:'comment one'},
        {id:3,text:'comment one'},
        {id:4,text:'comment one'},
        {id:5,text:'comment one'},
    ]
  return (
    <div>
        <h1> {title} </h1>
        <p> {body} </p>

        <h3>Comments ({comments.length})</h3>

        <ul>
            {comments.map((comment,index) => (
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>
  )
}
