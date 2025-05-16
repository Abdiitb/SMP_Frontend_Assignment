import React from 'react'
import { useParams } from 'react-router';
import { useFetchCourse } from '../../hooks/services/useFetchCourse.js';

function Course() {
    const { id } = useParams();
    const course = useFetchCourse(id);

  return (
      <>
      {course && Object.keys(course).length !== 0 && (
          <div key={course._id}>
          <div>{course.title}</div>
          <div>{course.short_description}</div>
          <div>{course.description}</div>
          <div>{course.paid ? course.price : "Free"}</div>
      </div>
    )}
    </>
  )
}

export default Course
