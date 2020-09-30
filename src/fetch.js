import React from 'react';


const Fetch = ()=>{
    const res=fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log(res);
}