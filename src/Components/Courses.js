import React, { useState } from 'react';
import Coursecard from './Coursecard';
import './Courses.css';

function Courses(props) {
    const [likedList, setLikedList] = useState(new Set());
    let coursesData = props.coursesData;
    let courseName = props.courseName;
    function filterItem(){

    }

    let categoryName=props.categoryName;
    function getCourses(){
        
        if(categoryName==="All")
        {
            let allCourses=[];
            Object.values(coursesData).forEach((courseCategory) => {
                courseCategory.forEach((item) => {
                    if (item.courseCategory === courseName)
                    allCourses.push(item);
                });
            });
            return allCourses;
        }else {
            return coursesData[categoryName];
        }
        
    }
    

    return (
        <div className='courses-container'>
            {
                getCourses().map(item => {
                    return <Coursecard
                        key={item.id}
                        item={item}
                        setLikedList={setLikedList}
                        likedList={likedList} />
                })
            }
        </div>
    );
}
export default Courses;