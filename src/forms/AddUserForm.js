import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',username:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
   

       setUser({...user,[name]:value})
    };

    const notify = () => {
        toast.success("User added successfully", {
            position: "top-center", // Set position to top center
            autoClose: 3000 // Set autoClose to 10 seconds (10,000 milliseconds)
        });
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
        notify();
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleInputChange} name="name" value={user.name} />
                <label>Username</label>
                <input type="text" onChange={handleInputChange} name="username" value={user.username} />
                <button style={{ backgroundColor: 'green', color: 'white' }} className="button success">Add new Project</button>
            </form>
            <ToastContainer position="top-center" autoClose={3000} />
    </div>
    )
 }

export default AddUserForm;