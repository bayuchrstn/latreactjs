import React,{ useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_Password] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name: name,
                email: email,
                password: password,
                confirm_password: confirm_password
            });
            navigate("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form onSubmit={ Register } className="box">
                        
                        <div className="field mt-5">
                            <label htmlFor="Name" className="label">Name</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label htmlFor="Email" className="label">Email</label>
                            <div className="controls">
                                <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label htmlFor="Password" className="label">Password</label>
                            <div className="controls">
                                <input type="password" className="input" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label htmlFor="ConfirmPassword" className="label">Confirm Password</label>
                            <div className="controls">
                                <input type="password" className="input" placeholder='********' value={confirm_password} onChange={(e) => setConfirm_Password(e.target.value)} />
                            </div>
                        </div>
                        <p className="has-text-centered has-text-danger">{msg}</p>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Register
