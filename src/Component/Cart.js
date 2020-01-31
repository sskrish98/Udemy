import React from 'react';

const Cart=(props)=>{
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.coursesummary}</p>
    </div>
}

const coursesdata=[
    {
        title:"Machine Learning",
        description:"Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep",
        coursesummary:"The course provides the entire toolbox you need to become a data scientist Fill up your resume with in demand data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow Impress interviewers by showing an understanding of the data science field"
    },
    {
        title:"Data Science",
        description:"Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
        coursesummary:"The course provides the entire toolbox you need to become a data scientist Fill up your resume with in demand data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow Impress interviewers by showing an understanding of the data science field" 
    },
    {        
        title:"Machine Learning",
        description:"Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep",
        coursesummary:"The course provides the entire toolbox you need to become a data scientist Fill up your resume with in demand data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow Impress interviewers by showing an understanding of the data science field"
    }
]
export default Cart;