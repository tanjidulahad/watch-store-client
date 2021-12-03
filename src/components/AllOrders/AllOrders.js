import React, { useEffect, useState } from 'react';
import './AllOrders.css';
import Swal from 'sweetalert2'

const AllOrders = () => {
    const [allorder, setAllorder] = useState([]);
    const [modifyCount, setModifyCount] = useState(0)
    

    

    const handleDelete =(id)=>{
        const confirmation =window.confirm('Are you Sure? want to delete this item?')
        if(confirmation){
            fetch(`https://gruesome-labyrinth-21556.herokuapp.com/allorders/${id}`,{
                method:'DELETE',
                headers:{'content-type':'application/json'}
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining = allorder.filter(order=>order._id !== id);
                setAllorder(remaining);
            })
            
        }
        
        } 
        const handleUpdatestatus = (id) => {
            const update = {status:'Shipped'}
            const url = `https://gruesome-labyrinth-21556.herokuapp.com/update/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(update)
            })
                .then(res=>res.json())                
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire('Updated Successfully');
                        setModifyCount(modifyCount+1);
                        
                    }
                })
            
        }      

    useEffect(() =>{
        fetch('https://gruesome-labyrinth-21556.herokuapp.com/allorder')
        .then(res => res.json())
        .then(data =>setAllorder(data))
    },[modifyCount])

    return (
        <div>
            <div className="container my-5">
                <h2 className="mt-4 section_title">All Order</h2>
                <div className="row">
                    {
                        allorder.map(order=><div key={order._id} className="col-md-4 g-2 mt-4">
                        <img className="img-fluid" src={order.img} alt="" />
                        <h4 className="my-4">{order.productName}</h4>
                        <h6>Status: {order.status}</h6>
                        <button className="info_btn3 mx-1" onClick={()=>handleDelete(order._id)} >Delete</button>
                        <button className="info_btn3" onClick={()=>handleUpdatestatus(order._id)} >Status update</button>
                        </div>)
                    
                    }

                </div>

            </div>
            
        </div>
    );
};

export default AllOrders;