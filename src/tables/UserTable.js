import React from "react";
import { Button } from "@blueprintjs/core";
import { toast } from 'react-toastify';

const UserTable = (props) => {
  const notify = () => {
    toast.success("Deleted Successfully", {
      position: "top-center",
      autoClose: 3000
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Button
                  intent="primary"
                  
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="button muted-button"
                >
                  Edit
                </Button>
                <Button>
                View</Button>
                <Button
                  intent="danger"
                  onClick={() => {
                    props.deleteUser(user.id);
                    notify(); // Call the notification function here
                  }}
                  className="button muted-button"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
