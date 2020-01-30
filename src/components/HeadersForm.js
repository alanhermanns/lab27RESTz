import React from 'react';

const FormURLAndMethods = () => {
    return (
        <form>
        <h2>Headers</h2>
        <label>Token</label>
        <input type='text'/>
        <h3>Basic Auth</h3>
        <label>User Name</label>
        <input type='text' name='patch' />
        <label>Password</label>
        <input type='text'></input>
        <button>Submit</button>
        </form>
    )
}

export default FormURLAndMethods;