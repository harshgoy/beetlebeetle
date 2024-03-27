import React, { useState } from 'react';
import './Blog.scss'; // Import CSS file
import { IoIosSearch } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const dummyBlogs = [
  { id: 1, img: "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "PRIVATE EQUITY", title: 'Introducing Campaigns', content: 'With competition getting tougher in the private markets, becoming...' },
  { id: 2, img: "https://images.unsplash.com/photo-1637769270420-e02b7419a721?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "INVESTMENT BANKING", title: 'Introducing Podcasts', content: 'With competition getting tougher in the private markets, becoming...' },
  { id: 3, img: "https://assets-global.website-files.com/63aad59086056248f33fd948/63ec09dc59eef7c0a49defd1_5fd6e865cd9274edd5879e05_information%2520architecture.jpeg", category: "CONSULTING", title: 'Introducing Templates', content: 'With competition getting tougher in the private markets, becoming...' },
  { id: 4, img: "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "PRIVATE EQUITY", title: 'Introducing Campaigns', content: 'With competition getting tougher in the private markets, becoming...' },
  { id: 5, img: "https://images.unsplash.com/photo-1637769270420-e02b7419a721?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "INVESTMENT BANKING", title: 'Introducing Podcasts', content: 'With competition getting tougher in the private markets, becoming...' },
  { id: 6, img: "https://assets-global.website-files.com/63aad59086056248f33fd948/63ec09dc59eef7c0a49defd1_5fd6e865cd9274edd5879e05_information%2520architecture.jpeg", category: "CONSULTING", title: 'Introducing Templates', content: 'With competition getting tougher in the private markets, becoming...' }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const filteredBlogs = dummyBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 3);
  };

  return (
    <div className="blog-collection">
      <h1>Latest Posts</h1>
      <div className='blog--search--btn--container'>
        <div className="blog--buttons--container">
          <button>All</button>
          <button>Private Equity</button>
          <button>Investment Banking</button>
          <button>Consulting</button>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <span >
          <IoIosSearch />

        </span>


      </div>

      <ul className="blog-list">
        {filteredBlogs.slice(0, visibleBlogs).map(blog => (
          <li key={blog.id} className="blog-item">


            <div>
              <img src={blog.img} alt="" />
              <h1>{blog.category}</h1>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>

            </div>

          </li>
        ))}
      </ul>
      {visibleBlogs < filteredBlogs.length && (

        <div className='load--more--container'><button className="load-more-btn" onClick={loadMore}>Load More &nbsp; <FaArrowDown /></button></div>
      )}
    </div>
  );
};

export default Blog;
