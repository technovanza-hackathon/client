import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AdminLogin = () => {
    const API = axios.create({ baseURL: 'https://helping-hands-server.herokuapp.com' });
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const response = await API.post('/admin/login', data);
        console.log(response.data);
        if (response.data.message === "Login Success") {
            alert("Login Successfully");
            window.location.replace("http://localhost:3000/admin");
        } else if (response.data.message === "Incorrect Password") {
            alert("You Password is Incorrect Kindly Login with Correct Credentials");
        } else if (response.data.message === "Admin Not found") {
            alert("Your Account Doesn't Seem To Exists, Kindly Register First");
            window.location.replace("http://localhost:3000/adminsignup");
        }
    };
    return (
        <section id="hero" className="d-flex align-items-center justify-content-center row">
            <div className="wrapper col-lg-2">
                <div className="logo"> <img src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFscGluZyUyMGhhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> </div>
                <div className="text-center mt-4 name">Admin Login </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="email" name="email" id="email" placeholder="Email" {...register("email", {
                        required: true,
                        minLength: 8,
                        maxLength: 100
                    })} /> </div>
                    <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="password" placeholder="Password" {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 200
                    })} /> </div> <button className="btn mt-3">Login</button>
                </form>
                <div className="text-center fs-6"> <a href="/adminsignup">Don't Have an Account?</a> or <a href="/adminsignup">Sign up</a> </div>
            </div>
        </section>
    )
}

export default AdminLogin