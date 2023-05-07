import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicDropdown from '../components/BasicDropdown';

const Rankings = () => {

  const [playerArr, setPlayerArr] = useState([]);
  const [positionSelect, setPositionSelect] = useState('');
  const [teamSelect, setTeamSelect] = useState('');

  const positionOptions = ['QB', 'RB', 'WR', 'TE', 'DS', 'K'];
  const teamOptions = [
    'ARI', 'ATL', 'BAL', 'BUF', 'CAR', 'CHI', 'CIN', 'CLE', 'DAL', 'DEN', 'DET', 'GB', 'HOU', 'IND', 'JAC', 'KC', 'LAC', 'LAR', 'LV', 'MIA', 'MIN', 'NE', 'NO', 'NYG', 'NYJ', 'PHI', 'PIT','SF', 'SEA', 'TB', 'TEN','WAS'
  ];

  const allPlayers = () => {
    axios.get('/api/players')
      .then(res => setPlayerArr(res.data))
      .catch(err => console.log(err));
  }

  const playersByTeam = (team) => {
    axios.get(`/api/players/team/${team}`)
      .then(res => setPlayerArr(res.data))
      .catch(err => console.log(err))
  }

  const playersByPos = (pos) => {
    axios.get(`/api/players/pos/${pos}`)
      .then(res => setPlayerArr(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    allPlayers();
  }, [])

  return (
    <div className='content'>
      <div id='sort-rank-options'>
        <button id='sort-all' onClick={allPlayers}>All Players</button>
        <BasicDropdown options={positionOptions} default={'Select Position'} onChange={(e) => {
          setPositionSelect(e.target.value);
        }} />
        <button id='sort-pos' onClick={() => { playersByPos(positionSelect) }}>By Position</button>
        <BasicDropdown options={teamOptions} default={'Select Team'} onChange={(e) => {
          setTeamSelect(e.target.value);
        }} />
        <button id='sort-team' onClick={() => { playersByTeam(teamSelect) }}>By Team</button>
      </div>
      <div id='rankings'>
        <table id='player-table'>
          <thead>
            <tr>
              <th>Overall Rank</th>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
              <th>Position Rank</th>
              <th>Bye Week</th>
            </tr>
          </thead>
          <tbody>
            {playerArr.map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.rank_ovr}</td>
                  <td>{x.name}</td>
                  <td>{x.position}</td>
                  <td>{x.team}</td>
                  <td>{x.rank_pos}</td>
                  <td>{x.bye_week}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Rankings;