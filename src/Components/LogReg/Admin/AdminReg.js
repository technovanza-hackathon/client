import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Hero from '../../Hero/Hero';

const AdminReg = () => {
    const API = axios.create({ baseURL: 'https://helping-hands-server.herokuapp.com' });
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        // console.log(data);
        if (data.password === data.cpassword) {
            const response = await API.post('/admin/register', data);
            alert(response.data.message);
            window.location.replace("http://localhost:3000/adminlogin");
        } else {
            alert("Password Should be Same in Both the Field : Password, Confirm Password")
        }
        // console.log("Data Sent Successfully");

        window.location.reload();
    };
    return (
        <>
            <Hero />
            <div className='row d-flex justify-content-center align-items-center'>
                <div className="wrapper col-lg-4">
                    <div className="logo"> <img src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFscGluZyUyMGhhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> </div>
                    <div className="text-center mt-4 name">Admin Registration </div>
                    <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="name" id="name" placeholder="Full Name" {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 20
                        })} /> </div>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="email" name="email" id="email" placeholder="Enter Your Email" {...register("email", {
                            required: true,
                            minLength: 8,
                            maxLength: 100
                        })} /> </div>
                        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="password" placeholder="Password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 200
                        })} /> </div>
                        <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" {...register("cpassword", {
                            required: true,
                            minLength: 6,
                            maxLength: 200
                        })} /> </div>
                        <button className="btn mt-3">Sign-Up</button>
                    </form>
                    <div className="text-center fs-6"> <a href="/adminlogin">Already Have an Account</a> ? <a href="/adminlogin">Login</a> </div>
                </div>
            </div>
        </>
    )
}

export default AdminReg