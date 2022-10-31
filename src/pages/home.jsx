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
                            <td><Link className="btn btn-info"
                            to={{ pathname:"/edit/"+user.id }}>Edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};
