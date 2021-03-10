import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import './Club.css'



const Club = (props) => {
  const { idLeague, idTeam, strTeam, strStadium, strCountry, strTeamLogo, strTeamBanner, strTeamBadge, intFormedYear, strGender, strYoutube, strTwitter, strWebsite } = props.club
  console.log(props);
  const history = useHistory()
  const showDetails = idTeam => {
    const url = `clubDetail/${idTeam}`
    history.push(url)
  }


  return (

    <div className="col-md-4 d-flex clubs"  >

      <Card style={{ width: '38rem' }}>

        <Card.Body>
          <h1>{strTeam}</h1>
          <h2>{strCountry}</h2>
          <img style={{ width: '380px' }} src={strTeamBadge} alt="" />
          <button className="btn btn-primary" onClick={() => showDetails(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </Card.Body>
      </Card>
    </div>


  );
};

export default Club;