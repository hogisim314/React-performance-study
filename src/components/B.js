import React, { useCallback } from 'react'

const Message = React.memo(({message}) => {
    return (
        <p>{message}</p>
    )
})

const ListItem = React.memo(({post}) => {
    return (
        <li key={post.id}>
            <p>
                {post.title}
            </p>
        </li>
    )
})

const List = React.memo(({posts, tmpfunction}) => {
    tmpfunction()
    console.log("List is rendering")
    return (
        <ul>
            {posts.map((post)=> (
                <ListItem key={post.id} post={post}></ListItem>
            ))}
        </ul>
    )
})

const B = React.memo(({message, posts}) => {
    const tmpfunction = useCallback(() => {}, []);
    console.log("B is rendering")
  return (

    <div>
        <h1>B component</h1>
        <Message message = {message}></Message>
        <List posts={posts}
        tmpfunction = {tmpfunction}
        ></List>
    </div>
  )
})

export default B