import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee, faFlag, faMapMarker, faMars } from '@fortawesome/free-solid-svg-icons'
import img from '../Images/img2.jpg'
import imgg from '../Images/img3.jpg'
import fb from '../Images/Facebook.png'
import twitter from '../Images/Twitter.png'
import tube from '../Images/YouTube.png'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css'
import image from '../Images/img1.jpg'

const ClubDetail = () => {
    const { idTeam } = useParams()
    const [detail, setDetail] = useState([])
    console.log(detail);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [])

    return (

        <div className="detail-club">
            <header>
                <div className="clubDetail-banner">
                    <img src={image} alt="" />
                </div>
                <div className="clubDetail-logo">
                    <img src={detail.strTeamBadge} alt="" />
                </div>

            </header>

            <div style={{ border: '1px solid red', width: '70%',margin:'auto' }} className="club">

                <div className="row details">
                <div className="col-md-6 clubDetail">
                    <h5>Club Detail  :-  {detail.strTeam}</h5>


                    <p><strong>Stadium : {detail.strStadium}</strong></p>


                    <p><FontAwesomeIcon icon={faFlag} /> :-

                      <strong>Country :{detail.strCountry}</strong> </p>


                    <p><FontAwesomeIcon icon={faMapMarker} />:-

                  <strong>Founded :{detail.intFormedYear}</strong> </p>


                    <p> <FontAwesomeIcon icon={faMars} />:-

                   <strong>Gender : {detail.strGender}</strong> </p>
                </div>

                <div className="gender col-md-6">
                    {
                        detail.strGender === "Male" ? <img src={img} alt="" /> : <img src={imgg} alt="" />
                    }

                </div>
                </div>


                
            </div>
            <div className="mt-5" style={{color:'rgba(245, 245, 245, 0.513)', width: '70%',margin:'auto',fontSize:'20px' }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis eius, tenetur tempore praesentium molestiae saepe recusandae explicabo. Cumque quod cum, ullam mollitia minima sed praesentium totam unde quibusdam inventore adipisci fugit labore recusandae hic, consectetur veniam eligendi quia illo neque animi porro dolorem autem molestiae. Delectus rem sapiente fuga.</p>

                       <br/>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor ipsum omnis voluptate, sapiente consequuntur error totam officiis consectetur maiores consequatur dignissimos culpa laudantium, nulla magni nam velit itaque impedit optio. Alias inventore exercitationem, repudiandae ab natus ut deleniti totam modi? Animi reprehenderit possimus, nihil quis accusamus at pariatur ea.</p>
            </div>

            <footer>

           <a target="_blank" href={"https://"+detail.strTwitter}> <img style={{width:'50px'}} src={twitter} alt=""/> </a>
           <a target="_blank" href={"https://"+detail.strYoutube}> <img style={{width:'50px'}} src={tube} alt=""/> </a>
           <a target="_blank" href={"https://"+detail.strWebsite}> <img style={{width:'50px'}} src={fb} alt=""/> </a>

           </footer>



        </div>
    );
};

export default ClubDetail;