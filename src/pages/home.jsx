import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import backend from '../backend';
export const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchAllUsers();
    }, []);
    const fetchAllUsers = () => {
        backend.get('/users').then((res) => {
            setUsers(res.data);
        });
    };

    const deleteUser = (id) => {
        backend.delete('/users/' + id).then((res) => {
            fetchAllUsers();
        });
    };

    return (
        <main>
            <h2>List Of Users</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                                <Link className="btn btn-warning" to={{ pathname:"/view/"+user.id }}>View</Link>
                                {' '}
                                <Link className="btn btn-danger" onClick={() =>
                                    {if (window.confirm('Are you sure you wish to delete this item?')) deleteUser(user.id)}}>Delete</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};
