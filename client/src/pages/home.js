import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [owners, setOwners] = useState([])

  useEffect(() => {
    axios.get('/api/owners')
    .then(res => setOwners(res.data))
    .catch(err => console.log(err))
  },[]);

  return(
    <div>
      {owners.map((x) => {
        return(
          <ul>
            <li>{x.name}</li>
            <li>{x.team_name}</li>
          </ul>
        )
      })}
    </div>
  )

}

export default Home;