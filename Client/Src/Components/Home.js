import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";

const Home = () => {

    const [data,setData] = useState([

        // {
        //     "name": "Varun",
        //     "age": 27,
        //     "email": "varun123@gmail.com"
        // },

        // {
        //     "name": "Sravs",
        //     "age": 26,
        //     "email": "Sravs@gmail.com"
        // },
    ]);


    useEffect(() => {
        Axios.get("http://localhost:2023/Get").then((res)=>{
            setData(res.data)
        }).catch(er=>console.log(er))
    }, [])
    
    const Deleteusr=(id)=>{
        Axios.delete(`http://localhost:2023/deleteUsr/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/Add"><button className='d-flex  justify-content-center btn btn-primary m-3'>Add +</button></Link>
                
                
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    

                    <tbody>
                        {data.length===0 ? <tr> No Data Found... </tr>
                    :
                        
                            data.map((obj,ind) => {
                                return <tr key={ind} className='m-5'> 
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.age}</td>
                                    <td> 
                                    <Link to={`/Update/${obj._id}`} className='btn btn-success btn-sm me-2'>Edit</Link> 
                                    <button className='btn btn-danger btn-sm'
                                    onClick={()=>Deleteusr(obj._id)} >Delete</button></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div></div>
    )
}

export default Home;