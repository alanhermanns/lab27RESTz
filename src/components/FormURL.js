import React from 'react';

const FormURLAndMethods = ({URLHandler, methodHandler, sendTextToState, sendBodyToState}) => {
    return (
        <>
        <form onSubmit={URLHandler}>
        <input type='text' onChange={sendTextToState}/>
          <label>Body</label>
          <input type='text' onChange={sendBodyToState}></input>
        <button type='submit'>Andale</button>
        </form>

        <form onSubmit={URLHandler}>
        <label>Get</label>
        <input onChange={methodHandler} type='radio' name='method' value='get' />
        <label>Post</label>
        <input onChange={methodHandler} type='radio' name='method' value='post'/>
        <label>Put</label>
        <input onChange={methodHandler} type='radio' name='method' value='put' />
        <label>Patch</label>
        <input onChange={methodHandler} type='radio' name='method' value='patch' />
        <label>Delete</label>
        <input onChange={methodHandler} type='radio' name='method' value='delete' />
        </form>
        </>
    )
}

export default FormURLAndMethods;