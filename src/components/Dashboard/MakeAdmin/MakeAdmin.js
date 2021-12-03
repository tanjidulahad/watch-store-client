import React from 'react';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';
import Swal from 'sweetalert2'

const MakeAdmin = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        
        const url = `https://gruesome-labyrinth-21556.herokuapp.com/admin?email=${email}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            
        })
            .then(res=>res.json()) 
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire("Admin Added Successfully");
                    reset();  
                }
                else if(data.acknowledged===true && data.modifiedCount===0){
                    Swal.fire("Admin already exist");
                    
                }
            })               
            
    };
    return (
        <div className="container">
            <div className="row">
                <h2 className="my-5 section_title">Make Admin</h2>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <form onSubmit={handleSubmit(onSubmit)} className='admin_form p-5 mb-5' >
           
                <input type="email" placeholder="email" {...register("email")} />
                
                
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input className="sub-btn" type="submit" />
                </form>
                </div>
                <div className="col-md-2"></div>

            </div>

        </div>
    );
};

export default MakeAdmin;