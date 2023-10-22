import React, { useState, useEffect } from 'react';
import './BlogView.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import ReusableComponents from '../commonReusableComponents/ReusableComponents';
import blogImage from './Rectangle 3463834.png';
import ImageComponent from './ImageComponent';
export default function BlogView() {
    const [blogs, setBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(12); // Initially, display 12 blogs
    const blogsPerPage = 12; // Number of blogs to load at a time
    const [loading, setLoading] = useState(false); // To indicate if data is being fetched
    const [hasMore, setHasMore] = useState(true); // To indicate if there's more data to load
    const [selectedCategory, setSelectedCategory] = useState('All'); // Selected category for filtering

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const loadMore = () => {
        if (blogs.length > visibleBlogs) {
            setVisibleBlogs(visibleBlogs + blogsPerPage);
        }
    };

    const changeCategory = (category) => {
        setSelectedCategory(category);
        setVisibleBlogs(12); // Reset visible blogs when changing categories
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://stuffin.in/index.php/wp-json/wp/v2/posts'); // Replace with the new API endpoint
                const data = await response.json();
                setLoading(false);

                if (data.length === 0) {
                    setHasMore(false);
                } else {
                    setBlogs(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData(); // Fetch data regardless of selectedCategory when the component mounts
    }, [selectedCategory]);

    const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.categories.some(cat => cat === selectedCategory));

    return (
        <>
            <Navbar />
            <div className="blog-page">
                <div className="blog-view-hero-section">
                    <br></br><br></br><br></br><br></br>
                    <h1>Join one of India’s Largest <br /> delivery platforms</h1>
                    <div className='blog-view-hero-subsection' >
                        <img src={blogImage} alt='/' />
                    </div>
                </div>

                <div className="category-list">
                    {['All', ...Array.from(new Set(blogs.flatMap(blog => blog.categories)))].map((category) => (
                        <span
                            key={category}
                            className={category === selectedCategory ? 'selected' : ''}
                            onClick={() => changeCategory(category)}
                        >
                            {category}
                        </span>
                    ))}
                </div>
                <div className="blog-grid">
                    {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
                        <div key={index} className="blog-item">
                            <Link to={{
                                pathname: '/blogview',
                                state: { blog },
                            }}>
                                {blog['_links']['wp:featuredmedia'] && blog['_links']['wp:featuredmedia'][0] && (
                                    <ImageComponent featuredMediaLink={blog['_links']['wp:featuredmedia'][0].href} />
                                )}
                                <div className="blog-details">
                                    <span>{blog.date + " | "}</span>
                                    <h3>{blog.title.rendered}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }}></div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <button className="load-more-button" onClick={loadMore} disabled={loading}>
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                )}
            </div>
            <br />
            <br /> <br /> <br />
            <ReusableComponents />
        </>
    );
}
