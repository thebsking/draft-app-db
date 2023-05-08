import React, { useEffect, useState } from 'react';
import axios from 'axios'

const BigBoard = () => {

  const [pickArr, setPickArr] = useState([]);
  const [currentPick, setCurrentPick] = useState(0);
  const [ownerArr, SetOwnerArr] = useState([]);
  const [onTheClock, setOnTheClock] = useState(ownerArr[0])


  const advancePick = () => {
    setCurrentPick(currentPick + 1);
    setOnTheClock(ownerArr.find(o => o.id === pickArr[currentPick].owner_id))
  }

  const createTableBody = (arr) => {
    let rows = []
    let round = []
    for (let i = 1; i <= arr.length; i++) {
      round.push(<td>{arr[i-1].number}</td>)
      
      if(i % 10 === 0){
        rows.push(round)
        round = []
      }
    }
    rows.push(round)
     return rows.map((x)=>{
      return <tr>{x}</tr>
     })
  }

  useEffect(() => {
    axios.get('/api/picks')
      .then(res => setPickArr(res.data))
      .catch(err => console.log(err));
    axios.get('/api/owners')
      .then(res => SetOwnerArr(res.data))
      .catch(err => console.log(err));
  }, [])


  return (
    <div className='content'>
      <div id='banner'>
        <h1>On The Clock: {onTheClock}</h1>
        <button onClick={advancePick}>Draft</button>
      </div>
      <table>
        <thead>
          <tr>
            {ownerArr.map((x, i) => {
              return <th key={i}>{x.name}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {createTableBody(pickArr)}
        </tbody>
      </table>
    </div>
  )

}

export default BigBoard;