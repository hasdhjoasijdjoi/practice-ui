import React, { useState }  from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../store/user.js";
import List from "./List";
import axios from "axios";
import { useEffect } from "react";

// const User = [
//     { name: "김동현", age: 24, id:1 }, { name: "강동진", age: 24, id:2}, { name: "이승현", age: 21, id:3}
// ]
// const User = axios.get("/api/users/").then((response) => (response.data));

const Lists = () => {
    //const user = useSelector(store => store.user);
    //const dispatch = useDispatch();
    const [user, setUser] = useState([]);
    useEffect(() => {
    
           axios.get('/api/users/').then(response => { console.log(response.data)
              setUser(response.data);
          });
            
          console.log(user);
 
    },[])


    return (
    <div>
        <ul>
            
        
        {user.map((user) => (<li key={user._id}><Link to={`/list/${user._id}`}>{user.name}</Link></li>))}

        </ul>
    </div>
     
    );
}

export default Lists;

//{User.map((user) => (<li><Link to={`/list/${user.name}`}>{user.name}</Link></li>)) }