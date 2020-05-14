import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
         const res = await axios.get('https://jso/nplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
      console.error(res);
      } catch (error) {
        console.error(error);
      }
     
    };

    fetchPosts();
  }, []);


  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      {/* <Posts posts={currentPosts} loading={loading} /> */}
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
    </div>
  );
}

export default App;
