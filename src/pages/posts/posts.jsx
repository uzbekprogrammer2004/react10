import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import "./posts.css"
const Index = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response);
            setUsers(response.data)
        })
    }, [])
    return (
        <div className='posts' >
            <table className="table table-bordered table-hover table-striped" >
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Index