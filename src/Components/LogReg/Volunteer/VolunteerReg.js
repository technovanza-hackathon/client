import React from 'react'
import { useForm } from 'react-hook-form';

const VolunteerReg = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        if (data.password === data.cpassword) {

        } else {
            alert("Password Should be Same in Both the Field : Password, Confirm Password")
        }
        console.log("Data Sent Successfully");

        // window.location.reload();
    };
    return (
        <>
            <br />
            <br />
            <br />
            <section id="hero" className="d-flex align-items-center justify-content-center row">
                <div className="wrapper col-lg-4">
                    <div className="logo"> <img src="https://images.unsplash.com/photo-1494386346843-e12284507169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFscGluZyUyMGhhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> </div>
                    <div className="text-center mt-4 name">Volunteer Registration </div>
                    <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="name" id="name" placeholder="Full Name" {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 20
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
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="address" id="address" placeholder="Enter Your Address" {...register("address", {
                            required: true,
                            minLength: 6,
                            maxLength: 200
                        })} /> </div>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="number" name="pincode" id="pincode" {...register("pincode", {
                            required: true,
                            minLength: 6,
                            maxLength: 7
                        })} placeholder="Enter Your Pincode" /> </div>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="number" name="contactNo" id="contactNo" {...register("contactNo", {
                            required: true,
                            minLength: 10,
                            maxLength: 13
                        })} placeholder="Enter Your Contact Number" /> </div>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="email" name="email" id="email" placeholder="Enter Your Email" {...register("email", {
                            required: true,
                            minLength: 8,
                            maxLength: 100
                        })} /> </div>
                        <div className="form-field d-flex align-items-center">
                            <select name="helpProvide" id="helpProvide" className="form-select" {...register("helpProvide", {
                                required: true
                            })} >
                                <option value="">Help You Can Provide</option>
                                <option value="food">Food and Water</option>
                                <option value="medical">Medical Kits</option>
                                <option value="transport">Transport</option>
                                <option value="clothes">Clothes</option>
                            </select>
                            <div className="validate"></div>
                        </div>
                        <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="additionalInfo" id="additionalInfo" placeholder="Enter Additional Info That you want to say (Optional)" {...register("message", {
                            required: false,
                            minLength: 2,
                            maxLength: 100
                        })} /> </div>
                        <button className="btn mt-3">Sign-Up</button>
                    </form>
                    <div className="text-center fs-6"> <a href="/adminlogin">Already Have an Account</a> ? <a href="/adminlogin">Login</a> </div>
                </div>
            </section>
        </>
    )
}

export default VolunteerReg