import React from 'react'
import { useForm } from 'react-hook-form';
import FileBase from 'react-file-base64';
import axios from 'axios';

const Victim = () => {
    const { register, handleSubmit } = useForm();
    const API = axios.create({ baseURL: 'https://helping-hands-server.herokuapp.com' });
    let file = "";
    const onSubmit = async (data) => {
        console.log("hello sachin");
        data["photo"] = file;
        console.log(data);
        const response = await API.post('/victim/register', data);
        alert(response.data.message + " Kindly Check Your Mail for Further Details");
        window.location.replace("http://localhost:3000/");
        console.log(response.data);
    };
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to Helping Hands</h1>
                    <h2>We are the team of Talented, Skilled and Helping Peoples </h2>
                    <a style={{ textDecoration: "none" }} href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            <section id="appointment" className="appointment section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Ask For Help</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <form className="php-email-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className="col-md-3 form-group">
                                <input required type="text" name="name" className="form-control" id="name" placeholder="Enter Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" {...register("name", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input required type="text" name="email" className="form-control" id="email" placeholder="Enter Your Email" data-rule="minlen:4" data-msg="Please enter at a Valid Email" {...register("email", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input required type="text" className="form-control" name="disasterAddress" id="address" placeholder="Enter Your Address" data-rule="address" data-msg="Please enter a Valid Address" {...register("disasterAddress", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input required type="text" className="form-control" name="location" id="location" placeholder="Enter Your Location" data-rule="location" data-msg="Please enter a Valid Location" {...register("location", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4 form-group mt-3">
                                <input required type="number" className="form-control" name="pincode" id="pincode" placeholder="Enter Your Pin Code" data-rule="email" data-msg="Please enter a Valid Address" {...register("pincode", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <input required type="number" className="form-control" name="contactNo" id="contactNo" placeholder="Enter Your Phone Number" data-rule="contactNo" data-msg="Please enter a Valid Phone Number" {...register("contactNo", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <input required type="number" className="form-control" name="aadhar" id="aadhar" placeholder="Enter Your Aadhar Number" data-rule="aadhar" data-msg="Please enter a Valid Aadhar Number" {...register("aadhar", {
                                    required: true
                                })} />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4 form-group mt-3">
                                <div className="custom-file">
                                    <FileBase type="file" multiple={false} onDone={({ base64 }) => {
                                        file = base64;
                                    }} />
                                </div>
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select {...register("disasterType")} className='col-md-4' required>
                                    <option disabled value="">
                                        Choose One
                                    </option>
                                    <option value="Earthquake">Earthquake</option>
                                    <option value="Landslide">Landslide</option>
                                    <option value="Flood">Flood</option>
                                    <option value="Avalanche">Avalanche</option>
                                    <option value="Storm">Storm</option>
                                </select>
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type="checkbox"
                                    id="food"
                                    name="food"
                                    value="food"
                                    {...register("food")}
                                />
                                <label htmlFor="food">Food & Water</label>

                                <input
                                    type="checkbox"
                                    id="clothes"
                                    name="clothes"
                                    value="clothes"
                                    {...register("clothes")}
                                />
                                <label htmlFor="clothes">Clothes</label>

                                <input
                                    type="checkbox"
                                    id="transport"
                                    name="transport"
                                    value="transport"
                                    {...register("transport")}
                                />
                                <label htmlFor="transport">Transport</label>

                                <input
                                    type="checkbox"
                                    id="medicalKits"
                                    name="medicalKits"
                                    value="medicalKits"
                                    {...register("medicalKits")}
                                />
                                <label htmlFor="medicalKits">Medical Kits</label>

                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="additionalInfo" id="additionalInfo" rows="5" required placeholder="Message" {...register("additionalInfo")}></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Request</button></div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Victim
//https://codesandbox.io/s/stupefied-banach-lsh4pp?file=/src/App.js:0-2803
//https://react-hook-form.com/api/usefieldarray/