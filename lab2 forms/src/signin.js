import React from 'react'
import { useState,useRef } from 'react';
export default function Signin() {
    const [user, setUser] = useState({
        namee:'',
        email:"",
        user_name: "",
        password: "",
      
      });
      const [errors, setErrors] = useState({
        namee:'',
        email:"",
        user_name: "",
        password: "",
       
      });
      const passRef = useRef();
      const rgxUserName = new RegExp("^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$");
      const rgxPass = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
      const rgxEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      const handleInputChange = (e) => {
        console.log(e.target, e.target.value);
        if (e.target.name === "email") {
          setUser({
            ...user,
            email: e.target.value,
          });
          setErrors({
            ...errors,
            email:
              e.target.value.length === 0
                ? "This field is required"
                : !rgxEmail.test(e.target.value)
                ? "invalid email format"
                : null,
          });
        }
        if (e.target.name === "namee") {
            setUser({
              ...user,
              namee: e.target.value,
            });
            setErrors({
              ...errors,
              namee:
                e.target.value.length === 0
                  ? "This field is required"
                  : null,
            });
          }
          if (e.target.name === "user_name") {
            setUser({
              ...user,
              user_name: e.target.value,
            });
            setErrors({
              ...errors,
              user_name:
                e.target.value.length === 0
                  ? "This field is required"
                  : !rgxUserName.test(e.target.value)
                  ? "spaces not allowed"
                  : null,
            });
          }
         
        if (e.target.name === "password") {
            setUser({
              ...user,
              password: e.target.value,
            });
            setErrors({
              ...errors,
              password:
                e.target.value.length === 0
                  ? "This field is required"
                  : e.target.value.length <= 8
                  ? "less than 8 characters"
                  :!rgxPass.test(e.target.value)
                  ?"invalid password format"
                  : null,
            });
          }
      };
      const submitMovie = (e) => {
        e.preventDefault();
        
      };
      const handelEye = ()=>{
        passRef.current.type = "text"
      }
    return (
        <div className="container">
            <div> Sign in form</div>
             <form onSubmit={(e) => submitMovie(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           name
          </label>
          <input
            name="namee"
            value={user.namee}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.namee && (
            <small className="text-danger">{errors.namee}</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           username
          </label>
          <input
            name="user_name"
            value={user.user_name}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.user_name && (
            <small className="text-danger">{errors.user_name}</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           email
          </label>
          <input
            name="email"
            value={user.email}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

       
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            name="password"
            value={user.password}
            onChange={(e) => handleInputChange(e)}
            type="password"
            className="form-control"
            id="password"
            aria-describedby="password"
            ref={passRef}
          />
          <span type="button" onClick={()=>{handelEye()}}>eye</span>
           {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </div>
    )
}
