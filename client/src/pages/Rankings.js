import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rankings = () => {

  const [playerArr, setPlayerArr] = useState([]);

  const allPlayers = () => {
    axios.get('/api/players')
      .then(res => setPlayerArr(res.data))
      .catch(err => console.log(err))
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

  useEffect(allPlayers, [])

  return (
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
              <tr>
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
  )
}

export default Rankings;