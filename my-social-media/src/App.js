// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, content: "This has some great healthy recipes", user: "Fiona Qazi" },
        { id: 2, content: "Loving the weather today!", user: "John Doe" },
    ]);

    const handleNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            content: e.target.elements.postContent.value,
            user: "You",
        };
        setPosts([newPost, ...posts]);
        e.target.reset();
    };

    return (
        <div className="app">
            <header className="header">
                <h2>SocialApp</h2>
                <input type="text" placeholder="Search..." className="search-bar" />
                <div className="header-icons">
                    <span>Home</span>
                    <span>Friends</span>
                    <span>Messages</span>
                    <span>Notifications</span>
                    <span>Profile</span>
                </div>
            </header>

            <aside className="sidebar">
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Watch</a>
                    <a href="/">Marketplace</a>
                    <a href="/">Groups</a>
                    <a href="/">Memories</a>
                </nav>
                <div className="shortcuts">
                    <h3>Shortcuts</h3>
                    <a href="/">Undiscovered Eats</a>
                    <a href="/">Weekend Trips</a>
                </div>
            </aside>

            <main className="main-content">
                <section className="stories">
                    <h3>Stories</h3>
                    <div className="story">User1</div>
                    <div className="story">User2</div>
                    <div className="story">User3</div>
                    <div className="story">User4</div>
                </section>

                <section className="create-post">
                    <form onSubmit={handleNewPost}>
                        <textarea name="postContent" placeholder="What's on your mind?" required></textarea>
                        <button type="submit">Post</button>
                    </form>
                </section>

                <section className="post-list">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <p><strong>{post.user}</strong></p>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </section>
            </main>

            <aside className="right-sidebar">
                <section className="sponsored">
                    <h3>Sponsored</h3>
                    <p>Ad Content Here</p>
                </section>

                <section className="contacts">
                    <h3>Contacts</h3>
                    <p>John Doe</p>
                    <p>Jane Smith</p>
                </section>
            </aside>
        </div>
    );
};

export default App;
