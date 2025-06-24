import React, { useState } from 'react';

const FormValidation = () => {
    const [form, setForm] =  useState({
        name:''
        ,email:''
        ,password:''
    })
    return (
        <div>
            <form >
                <h2>Signup Form</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" value={form.name} onChange={(e)=> setForm({...form, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} />
                </div>
            </form>
        </div>
    );
};

export default FormValidation;