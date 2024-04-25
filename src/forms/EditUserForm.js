import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const notify = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 3000
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
        notify("User updated successfully"); // Add the notification here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleInputChange} name="name" value={user.name} />
                <label>Username</label>
                <input type="text" onChange={handleInputChange} name="username" value={user.username} />
                <button style={{ backgroundColor: 'green', color: 'white' }} className="button success">Update Details</button>
                <button className="button muted-button" onClick={() => { props.setEditing(false) }} style={{ backgroundColor: 'red', color: 'white' }}>Cancel</button>
            </form>
        </div>
    );
}

export default EditUserForm;
