import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teams = (props) => {
  const { strTeam, strTeamLogo, strSport, idTeam } = props.team;

  return (
    <div className="row">
      <div className = "col-4">
        <Card style={{ border: '1px solid black', padding: '10px', backgroundColor: 'azure', margin: '10px'}}>
          <Card.Img variant="top" src={strTeamLogo} />
          <Card.Body>
            <Card.Title>{strTeam}</Card.Title>
            <Card.Text>
              Sport Type: {strSport}
            </Card.Text>

            <Link to={`/team-details/${idTeam}`}>
              <Button variant="primary">Explore Team <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
            </Link>

          </Card.Body>
        </Card>
      </div>

    </div>
  );
};

export default Teams;