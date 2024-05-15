import React, { useState } from 'react';
import {nanoid} from 'nanoid';

const Form = ({ addUser }) => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [contact, setcontact] = useState();

    const SubmitHandler = (e) => {
        e.preventDefault();
        const id = nanoid();
        addUser({ id, name, email, contact});
        setname('');
        setemail('');
        setcontact('');
    };
    
    return (
        <div>
        <form onSubmit={SubmitHandler}>
            <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)}/>
            <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)}/>
            <input type="text" placeholder='contact' value={contact} onChange={(e) => setcontact(e.target.value)}/>
            <button type="submit">Add User</button>
        </form>
        </div>
    );
}

export default Form;