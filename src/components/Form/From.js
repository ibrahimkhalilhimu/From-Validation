import React, { useState } from 'react';
import '../../App.css'

const From = () => {

  const [title,setTitle]= useState("")

console.log(title);
  const [body,setBody]= useState("")

  const [newData,setNewData]= useState([])


    const handleSubmit = (e) => {
      e.preventDefault();
if(title && body){
  const fromData = {title: title, body: body, id:Math.round( Math.random() * 100 +1) }
  setNewData([...newData, fromData]);
  setTitle("")
  setBody("")
 }else{
   alert('Input required')
 }

}

  
    return (
        <div>
            <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>From Validation</h2>
          <form onSubmit={handleSubmit}>
            <div className='title'>
              <label htmlFor="title">Title</label>
              <input type='type' 
              name='title' 
              autoComplete='off'
            value={title}
            onChange={(e)=> setTitle(e.target.value)} 
              />
    
            </div>
            <div className='body'>
              <label htmlFor="body">Body</label>
              <input type='body' name='body' 
              value={body}
              onChange={(e)=> setBody(e.target.value)}
              />
            </div>
            <div className='submit'>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
        <div className="showData">
          <pre>{JSON.stringify(newData,undefined,2)}</pre>
          </div>
      </div>
        </div>
    );
};

export default From;

