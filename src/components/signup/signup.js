import { Component } from 'react';
import './signup.css';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                email: '',
                phone: '',
                password: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            formValues: {
                email: event.target.email,
                phone: event.target.phone,
                password: event.target.password,
            },
        })
    }

    handleSubmit(event) {
        console.log(this.state.formValues);
        event.preventDefault();
    }
    render() {
        return (
            <div className='container h-100'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-4">
                        <div>
                            <input className="input-fields w-100 my-2" type="email" placeholder='Enter Your Email' name="email" onChange={this.handleChange}></input>
                            <input className="input-fields w-100 my-2" type="text" placeholder='phone Number' name="phoneNumber" onChange={this.handleChange}></input>
                            <input className="input-fields w-100 my-2" type="password" placeholder='Enter your Password' name="password" onChange={this.handleChange}></input>
                            <div className="d-flex justify-content-center my-2">
                                <button type="button" className="btn btn-primary px-5" onClick={this.handleSubmit}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Signup;