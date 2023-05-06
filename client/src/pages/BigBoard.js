import React, { useEffect, useState } from 'react';
import axios from 'axios'

const BigBoard = () => {

  const [pickArr, setPickArr] = useState([]);
  const [currentPick, setCurrentPick] = useState(1);
  const [ownerArr, SetOwnerArr] = useState([]);
  const rounds = 5;

  const advancePick = () => {
    setCurrentPick(currentPick + 1);
  }

  useEffect(()=>{
    axios.get('/api/picks')
    .then(res => setPickArr(res.data))
    .catch(err => console.log(err))
  },[])

  useEffect(() => {
    axios.get('/api/owners')
    .then(res => SetOwnerArr(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div>
      {console.log(pickArr)}
      <table>
        
      </table>
    </div>
  )

}

export default BigBoard;