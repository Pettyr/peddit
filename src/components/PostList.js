import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../app/routes';

import dummyPosts from '../assets/dummyPosts';

export default function PostList() {

    return (
        <section className="center">
            <h1> POSTS </h1>
            {/* <ul className="post-list">
                {Object.values(posts).map((post) => (
                    <li className="post" key={post.id}>
                    <Link to={ROUTES.postRoute(post.id)} className="post-link">
                     <div className="post-container">
                        <img src="" alt="" />
                        <div className="post-content">
                            <h2>{post.name}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    </Link>
                    </li>
                ))}
                </ul> */}
            <div>
            {dummyPosts.map(post => (
            <article key={post.id}>
                <Link to={ROUTES.postRoute(post.id)}>
                <div>
                    <h4>{post.author}</h4>
                    <p>Posted by {post.author} on {post.date}</p>
                </div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Link to={ROUTES.postRoute(post.id)}>
                    <p>{post.comments.length} Comments</p>
                </Link>
                </Link>
            </article>
            ))}
            </div>       
        </section>
    )
}