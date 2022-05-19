import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <div className='Login'>
            <div className='login-container'>
                <div>
                    <p>User</p>
                    <input type='text' />
                </div>
                <div>
                    <p>Password</p>
                    <input type='text' />
                </div>
            </div>
        </div>
    );
}
