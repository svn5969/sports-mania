import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import image from '../Images/img1.jpg'
import './Home.css'

const Home = () => {
       
    const [clubs,setClubs] =  useState([])
    console.log(clubs);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(res => res.json())
        .then(data => setClubs(data.teams))
    },[])
    return (
        <div>
           <div className="content-wrapper">
           <img src={image} alt=""/>
           </div>
           <div className="text-wrapper">
               <h1>Sports Mania</h1>
           </div>
           <br/>
           <br/>
            
         <div className="row">
         {
                  clubs.map(club => <Club club={club}></Club>)
              }
            
         </div>
             
           
          
        </div>
    );
};

export default Home;