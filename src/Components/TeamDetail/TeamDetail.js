import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature, faGlobe, faBirthdayCake, faGamepad, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import male from '../../images/male.png';
import female from '../../images/female.png';

const TeamDetail = () => {
    
    const { idTeam } = useParams();

    const [teamDetails, setTeamDetails] = useState({});
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam]);

    const headerStyle = {
        backgroundImage: "url(https://www.spanish-fiestas.com/wp-content/uploads/2020/06/mai-bernabeu-02-1600x900.jpg)", 
        height: "300px",
        display: "flex",
        justifyContent: "center",
        padding: "10px"
      }
    const bannerImage = teamDetails.strGender === "Male"? male : female;
    return (
        
        <div>
            <div style ={headerStyle}>
                <div>
                <img style ={{width:"280px", display: "flex", justifyContent: "center"}} src={teamDetails.strTeamBadge} alt=""/>
                </div>
            </div>
            
            <div className="container">
            <div className= "banner">
                <Card>
                    <Card.Img variant="top" src={teamDetails.strTeamBanner} />
                    <Card.Body>
                        <Card.Text>
                            <hr />
                            <h1 style={{ textAlign: "center" }}>Details of <b>{teamDetails.strTeam}</b></h1>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className = "details row">
                <div className ="col-md-6">
                    <h4> <FontAwesomeIcon icon={faFileSignature} /> Official Name: {teamDetails.strTeam} </h4>
                    <h4> <FontAwesomeIcon icon={faGlobe} /> Country: {teamDetails.strCountry} </h4>
                    <h4> <FontAwesomeIcon icon={faBirthdayCake} /> Established: {teamDetails.intFormedYear} </h4>
                    <h4> <FontAwesomeIcon icon={faGamepad} /> Stadium: {teamDetails.strStadium} </h4>
                    <h4> <FontAwesomeIcon icon={faVenusMars} /> Team Gender: {teamDetails.strGender} </h4>
                    
                </div>

                <div className ="col-md-6">
                    <img src={bannerImage} alt="" />
                </div>

            </div>
            <div className= "banner">
                <p>{teamDetails.strDescriptionEN}</p>
            </div>

            <div className="footer">
               
                <a href={`https://${teamDetails.strTwitter}`} target="_blank" rel="noreferrer"><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" width="50px"/></a>
                <a href={`https://${teamDetails.strFacebook}`} target="_blank" rel="noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="" width="50px"/></a>
                <a href={`https://${teamDetails.strYoutube}`} target="_blank" rel="noreferrer"><img src="https://cdn2.iconfinder.com/data/icons/social-18/512/YouTube-512.png" alt="" width="50px"/></a>
                
            </div>
        </div>
        </div>

    );
};

export default TeamDetail;