import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const Details = () => {
    const {serviceId}= useParams();
    const [details, setDetails] = useState([]);
    const [name, setName] = useState('');
    const [email, setemail] = useState('')
    console.log(serviceId)

    useEffect(()=>{
        fetch('/watches.JSON')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    
    const item =details?.find(pd =>pd.key === serviceId)
    // console.log(item)

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        data.status = 'pending';
                
        data.poductId= serviceId;
        data.productName= item?.name;
        data.img=item?.img
        console.log(JSON.stringify(data))
        fetch("https://gruesome-labyrinth-21556.herokuapp.com/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Order placed successfully');
                reset()
            }
        })
    };  
    
    
    return (
        <div>
            <div className="container mb-5">
                <div className="row ">
                    <h2 className="my-5">Destination Details</h2>
                     
                    <div className="col-md-6">
                        <img className="img-fluid" src={item?.img} alt="" />
                        <h2>{item?.name}</h2>
                        <p>Description:{item?.description}</p>
                        <p className="fw-bold">Cost:${item?.price}</p>
                    </div>                
                <div className="col-md-6 hook mt-1 p-3">                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input defaultValue={user.displayName}  {...register("name")} placeholder="name" />                      
                        
                        <input defaultValue={user.email}  {...register("email", { required: true })} placeholder="email"/>
                        <input  {...register("address", { required: true })} placeholder="address"/>
                        <input type="number" {...register("phone", { required: true })} placeholder="phone"/>
                        
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" />
                    </form>
                </div>
                </div>
            </div>
                
           
            
        </div>
    );
};

export default Details;