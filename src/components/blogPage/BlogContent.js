import React from 'react';
import { useLocation } from 'react-router-dom';
import './BlogContent.css';
import Navbar from '..//navbar/Navbar';
import ReusableComponents from '../commonReusableComponents/ReusableComponents';

function splitStringIntoThreeParts(inputString) {
    // Find the positions of the first two periods ('.')
    const firstDotIndex = inputString.indexOf('.');
    const secondDotIndex = inputString.indexOf('.', firstDotIndex + 1);

    // If there are at least two periods, split the string
    if (firstDotIndex !== -1 && secondDotIndex !== -1) {
        // Calculate the lengths of the three parts
        const totalLength = inputString.length;
        const part1Length = firstDotIndex + 1;
        const part2Length = secondDotIndex - firstDotIndex;
        const part3Length = totalLength - secondDotIndex - 1;

        // Extract the substrings
        const part1 = inputString.substr(0, part1Length);
        const part2 = inputString.substr(firstDotIndex + 1, part2Length);
        const part3 = inputString.substr(secondDotIndex + 1, part3Length);

        return [part1, part2, part3];
    } else {
        // Handle the case where there are not enough periods to split
        return ["", inputString, ""];
    }
}

export default function BlogContent() {
    // Use the useLocation hook to access the state passed from the previous component
    const location = useLocation();
    let blog = JSON.parse(localStorage.getItem('CurrentBlog'));;

    if (blog != null) {
        return (
            <>
                <Navbar />
                <div className='blog-content-container'>
                    <div className='blog-content-herocontainer'>
                        <h1>{blog.heading}</h1>
                    </div>

                    <div className='blog-content-subcontainer' >
                        <div className='blog-info'>
                            <h5>{blog.subheading}</h5>
                            <span>{blog.date}</span>
                            <p>By {blog.author}</p>
                        </div>
                        <h6>{splitStringIntoThreeParts(blog.description)[0]}</h6>
                        <p>{splitStringIntoThreeParts(blog.description)[1]}</p>
                        <img src={blog.author_image} alt='/' />
                        <span>{blog.author},Swiggy's CTO</span>
                        <p>{splitStringIntoThreeParts(blog.description)[2]}</p>
                    </div>

                </div>
                <ReusableComponents />
            </>
        )
    }
    return (<div>No Data</div>)

}
