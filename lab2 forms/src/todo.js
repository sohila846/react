import React from 'react'
import { useState,useEffect } from 'react';
export default function Todo() {
    const [items, setItems] = useState("");
    const list=[];
    const handleInputChange = (e) => {
        console.log(e.target, e.target.value);
    }
    const Submit = (e) => {
       setItems(e.target.value)
       console.log(items)
       list.push(setItems(items))
       console.log(list)
       
    }
  
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand">My ToDo list</a>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <input   type="text"  aria-label="Sizing example input" placeholder="enter your todo item"
   onChange={(e) => handleInputChange(e)}/>
<button class="btn-btn-primary" onClick={(e)=>Submit(e)} >add item</button>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" >
    <h4>
    <button class="btn-btn-primary" >remove</button>
     item1</h4>
    </div>
  </div>
 
        </div>
    )
}
