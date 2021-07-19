import './signup.css';
import { BrowserRouter } from 'react-router-dom'


function Signup() {
    return (
        <div className='container h-100'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-6">
                        <div>
                            <input className="input-fields w-100 my-2" type="email" placeholder='Enter Your Email' name="email"></input>
                            <input className="input-fields w-100 my-2" type="text" placeholder='phone Number' name="phoneNumber"></input>
                            <input className="input-fields w-100 my-2" type="password" placeholder='Enter your Password' name="password"></input>
                            <div className="d-flex justify-content-center my-2">
                                <button type="button" className="btn btn-primary px-5">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default Signup;