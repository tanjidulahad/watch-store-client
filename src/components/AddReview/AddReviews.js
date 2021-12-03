import React from 'react';
import { useForm } from "react-hook-form";
import "./AddReviews.css";
import Swal from 'sweetalert2'

const AddReviews = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(JSON.stringify(data))
        fetch("https://gruesome-labyrinth-21556.herokuapp.com/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire("Riview Given Successfully");
                reset();
                
            }
            
            
        })
        
    };
    return (
        <div className="container">
            <h2 className="section_title my-3">Add Reviews</h2>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div className="form p-5 my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="Name">Name</label>
                <input  {...register("name")} placeholder="Name" />

                <label htmlFor="Rating">Ratings</label>
                <input type="number"  {...register("rating")} placeholder="0-5" />
                
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="Review">Your Review</label>
                <textarea {...register("review", { required: true })} placeholder="Review" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
                </form>            
                </div>
                </div>
                <div className="col-md-2"></div>
        
        </div>
        </div>
    );
};

export default AddReviews;