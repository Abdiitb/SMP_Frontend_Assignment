import { useFetchAllCourses } from "../../hooks/services/useFetchAllCourses.js"


function CourseList() {
    const courses = useFetchAllCourses();

    // console.log(courses);

    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
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
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default CourseList
