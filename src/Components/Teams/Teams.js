import React from 'react';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teams = (props) => {
  const { strTeam, strTeamLogo, strSport, idTeam } = props.team;

  return (
    <Col sm={4}>
    <Card className="my-3" style={{border: '1px solid black', padding: '20px', backgroundColor: 'azure'}}>
      <Card.Img variant="top" src={strTeamLogo} />
      <Card.Body>
        <Card.Title>{strTeam}</Card.Title>
        <Card.Text>
          Sport Type: {strSport}
        </Card.Text>

        <Link to= {`/team-details/${idTeam}`}> 
        <Button variant="primary">Explore Team <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
        </Link>

      </Card.Body>
    </Card>
    </Col>
  );
};

export default Teams;