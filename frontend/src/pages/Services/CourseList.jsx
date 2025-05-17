import { useFetchAllCourses } from "../../hooks/services/useFetchAllCourses.js"
import { Link } from "react-router";

function CourseList() {
    const courses = useFetchAllCourses();

    // console.log(courses);

    return (
        <div className="overflow-x-auto rounded-box border-2 border-black dark:border-green-500 flex-grow">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="dark:text-white text-black">
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {courses && courses.length !== 0 && courses.map((course, index) => (
                        <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td>{course.title}</td>
                            <td>{course.short_description}</td>
                            <td>{course.price}</td>
                            <td><Link to={'/services/courses/' + course._id}><button className="btn btn-primary">View</button></Link></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default CourseList
