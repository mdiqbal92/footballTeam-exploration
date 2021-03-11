import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    const[teams, setTeams] = useState([])

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0,18)))
    }, [])
    return (
        <div>
            <h1 style ={{textAlign: "center"}}>Total Loaded Teams: {teams.length}</h1>
            <hr/>

            <div className= "container">
            <div className= "row">
            {
                teams && teams.map(team => <Teams team ={team}></Teams>)
            }
            </div>
            </div>
            
        </div>
    );
};

export default Home;