import { useState, useEffect } from 'react'
import { useFetchAllBlogs } from '../../hooks/services/useFetchAllBlogs.js'

function BlogList() {
    const blogs = useFetchAllBlogs();

    // console.log(data);

    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    // fetch("/api/v1/blog")  // full path
    //   .then((res) => {
    //     console.log("Status:", res.status);
    //     return res.text(); // show raw response
    //   })
    //   .then((text) => {
    //     console.log("Raw response:", text);
    //     try {
    //       const json = JSON.parse(text);
    //       console.log("Parsed JSON:", json.data);
    //       setBlogs(json.data);
    //     } catch (err) {
    //       console.error("Failed to parse JSON:", err);
    //     }
    //   })
    //   .catch((err) => console.error("Fetch error:", err));
    // if (data) {
        // setBlogs(data);
    // }
    // console.log("data : ", data)
//   }, []);

    console.log(blogs);

    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {blogs && blogs.length !== 0 && blogs.map((blog, index) => (
                        <tr key={blog._id}>
                            <th>{index + 1}</th>
                            <td>{blog.title}</td>
                            <td>{blog.short_description}</td>
                            <td><button>View</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default BlogList
