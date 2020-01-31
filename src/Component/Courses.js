import React from 'react';
import Course from '../Component/Course'

const coursesdata=[
    {
        "image":"https://i.udemycdn.com/course/240x135/950390_270f_3.jpg" ,
      "title":"Machine Learning",
      "author":"Kirill Eremenko"
    },
    {
        image:"https://i.udemycdn.com/course/240x135/1754098_e0df_3.jpg", 
        title:"Data Science",
        author:"365 degree team" 
    },
    {        
        image:"https://i.udemycdn.com/course/240x135/1151632_de9b.jpg" ,
      title:"Deep Learning",
      author:"Hadelin de Pont"
    }
]
const Courses =()=>
{
    let courselist=coursesdata.map(course=>{
        return(
            <Course image={course.image} title={course.title} author={course.author}/>
        );
    });
    return(
        <div>
            {courselist}
        </div>
    )
}
export default Courses;

/*<div className="App">
<Course image="https://i.udemycdn.com/course/240x135/950390_270f_3.jpg" 
title="Machine Learning"
author="Kirill Eremenko"/>
</div>
<div className="App">
<Course image="https://i.udemycdn.com/course/240x135/1754098_e0df_3.jpg" 
title="Data Science"
author="365 degree team"/>
</div>
<div className="App">
<Course image="https://i.udemycdn.com/course/240x135/1151632_de9b.jpg" 
title="Deep Learning"
author="Hadelin de Pont"/>
</div>*/
