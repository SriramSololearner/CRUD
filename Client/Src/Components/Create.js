import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState();
    const [email,setEmail]= useState();
    const [age, setAge] = useState();
    const Navigate=useNavigate();

    const SubmitHandler=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:2023/AddUsr",{name,email,age})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        // console.log({Name,Email,Age})
        Navigate('/')
    }
    return (
        <div className='d-flex vh-100 bg-primary  justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3 justify-content-start'>
                <form onSubmit={SubmitHandler}>
                    <h3 className='d-flex  justify-content-start'>Add User</h3>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type='text' 
                        placeholder='Enter Username' 
                        className='form-control'
                        onChange={(e)=>setName(e.target.value)}
                        />
                
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type='email' 
                        placeholder='Enter Email' 
                        className='form-control' 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label>Age</label>
                        <input type='text' 
                        placeholder='Enter Age' 
                        className='form-control'
                            onChange={(e) => setAge(e.target.value) }/>
                    </div>
                    <button className='btn btn-outline-success m-3 px-4 '>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Create