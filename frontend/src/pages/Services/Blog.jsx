// import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetchBlog } from '../../hooks/services/useFetchBlog';

function Blog() {
    const { id } = useParams();
    // const data = useFetchAllBlogs();
    const blog = useFetchBlog(id);
    

    return (
        <>
        {blog && Object.keys(blog).length !== 0 && (
            <div key={blog._id}>
                <div>{blog.title}</div>
                <div>{blog.description.introduction}</div>
                {blog.description.mainContent.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                <div>{blog.description.conclusion}</div>
            </div>
            
        ) 
    }

        
        
        

        </>
    )
}

export default Blog
