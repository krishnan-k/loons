import React, { useState } from 'react'
import { register } from './Authentication';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            setSuccess('Registration successful! You can now log in')
            setError('')
            setEmail('');
            setPassword('');
        }
        catch (err) {
            console.log('Registration error', err);
            setError('Registeration failed')
            setSuccess('');
        }
    }
    return (
        <div className="container-fluid account">
            <div className="account-section">
                <div className="account-content">
                    <p className="description m-0">
                        Pantaloons <b>Sale</b> is here! Get Upto <b>60% Off</b> +
                        <b>
                            {" "}
                            Extra <br /> Rs.1500 Off
                        </b>
                        * on order value of Rs.5999, Code: SALE1500
                    </p>
                    <div className="heading-content">
                        <h3 className="heading pt-3 pb-3 m-0">
                            Account Register
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="account-settings pt-3 pb-3 text-center">
                                <div className="account-details">
                                    <label className="text-start form-label text-capitalize">
                                        Email <span class="mandatory_field">*</span>
                                    </label>
                                    <input className="accout-input form-control text-start"
                                        type='text'
                                        name="email"
                                        placeholder="Enter your user name"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="account-details">
                                    <label className="text-start form-label text-capitalize">
                                        Password <span class="mandatory_field">*</span>
                                    </label>
                                    <input className="accout-input form-control text-capitalize text-start"
                                        type='password'
                                        name="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn text-uppercase mt-3">register</button>
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                {success && <p style={{ color: "red" }}>{success}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
