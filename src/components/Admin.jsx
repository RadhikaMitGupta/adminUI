import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./admin.css"
const Admin = () => {
const [user,setData]=useState([])
const [page,setPage]=useState(1)
 useEffect(()=>{
      getData()
 },[])
 const getData=()=>{
     axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`).then((res)=>{
         setData(res.data)
     }).catch((err)=>{
         console.log(err)
     })
 }
   console.log(user)
//    console.log(data.id)
 
async function postData(url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }
  postData()
  return (
        <div>
               <div id='container'>
              <input id="input" type="text" placeholder='serach here'  />
               <div id='data'>
                   <div className='data1'><h3><input type="checkbox" /></h3></div>
                   <div className='data1'><h3>Name</h3></div>
                   <div className='data1'><h3>Email</h3></div>
                   <div className='data1'><h3>Roll</h3></div>
                   <div className='data1'><h3>Actions</h3></div>  
               </div>
               {user.map((e)=>{
                   return  (
                       <div id='data'>
                           <div id='checkbox' className='data1'><h3><input type="checkbox" /></h3></div>
                   <div className='data1'><h3>{e.name}</h3></div>
                   <div id='email' className='data1'><h3>{e.email}</h3></div>
                   <div className='data1'><h3>{e.role}</h3></div>
                   <div id="icon" className='data1'><p><img src="data:image/png;base64,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" alt="" /><img src="data:image/png;base64,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" alt="" /></p></div>  
                       </div>
                   )
                })}
            </div>
       
    </div>
  )
}

export default Admin
