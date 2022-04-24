 import Display from './components/Display.js'
import Actions from './components/Actions.js'
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('')
  const [createName, setCreateName] = useState(true)
  const [str, setStr] = useState(10)
  const [dex, setDex] = useState(10)
  const [intel, setInt] = useState(10)
  const [stam, setStam] = useState(10)
  const [points, setPoints] = useState(10)
  const [createChar, setCreateChar] = useState(true)
  const [health, setHealth] = useState(stam * 5)
  const [room, setRoom] = useState('town square')

  const buttonFuncs = {
    incStr: function(){
      setStr(str + 1)
      setPoints(points - 1)
    },
    decStr: function(){
      setStr(str - 1)
      setPoints(points + 1)
    },
    incDex: function(){
      setDex(dex + 1)
      setPoints(points - 1)
    },
    decDex: function(){
      setDex(dex - 1)
      setPoints(points + 1)
    },
    incInt: function(){
      setInt(intel + 1)
      setPoints(points - 1)
    },
    decInt: function(){
      setInt(intel - 1)
      setPoints(points + 1)
    },
    incStam: function(){
      setStam(stam + 1)
      setPoints(points - 1)
    },
    decStam: function(){
      setStam(stam - 1)
      setPoints(points + 1)
    },
  }

  const dice = (num) => {
    Math.floor((Math.random() * num) + 1)
  }

  const strDamageBonus = Math.floor(str * 0.5)

  const equipment = {
    weapon: {
      name: 'Sword',
      damage: (dice(6) * 2) + strDamageBonus //2d6 + strength bonus
    },
    armor: {
      name: 'Leather',
      ac: 12
    },
    item: 'Red Potion'
  }
  //handle setting Name
  let currentName = ''
  const submitName = () => {
    setName(currentName)
    setCreateName(false)
  }

  return (
    <div className="container-fluid" id='main'>
      <div id='char-sheet' className="char-sheet">
        {points === 0 && createChar ? <button onClick={() => setCreateChar(false)}>Finalize Stats?</button> : null}
        <ul className='stats'> Stats:
          {createChar ? <div>Points Remaining: {points}</div> : null}
          <li className='stat'>Strength: {str} 
          {(str < 20 && points > 0 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.incStr()}>+</button> : null}
          {(str > 10 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.decStr()}>-</button> : null}
          </li>
          <li className='stat'>Dexterity: {dex}
          {(dex < 20 && points > 0 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.incDex()}>+</button> : null}
          {(dex > 10 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.decDex()}>-</button> : null}
          </li>
          <li className='stat'>Intelligence: {intel}
          {(intel < 20 && points > 0 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.incInt()}>+</button> : null}
          {(intel > 10 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.decInt()}>-</button> : null}
          </li>
          <li className='stat'>Stamina: {stam}
          {(stam < 20 && points > 0 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.incStam()}>+</button> : null}
          {(stam > 10 && createChar) ? <button className='stat-btn' onClick={()=> buttonFuncs.decStam()}>-</button> : null}
          </li>
        </ul>
        <ul className='inventory'> Inventory:
          <li className='eq'>Weapon: {equipment.weapon.name}</li>
          <li className='eq'>Armor: {equipment.armor.name}</li>
          <li className='eq'>Item: {equipment.item}</li>
        </ul>
      </div>
      <div className='top-bar'>
        {createName ? <form><input id='name-input' type="text" onChange={event => {currentName = event.target.value}}></input><button onClick={()=> submitName()}>Choose Name</button></form>: null}
        {!createName ? <div className='top-item'>Name: {name}</div>: null}
        <div className='top-item'>HP: {health}</div>
        <div className='top-item'>AC: {equipment.armor.ac}</div>
      </div>
      <Display />
      <div id='action-bar' className='action-bar'>
        <button className='action'>Attack</button>
        <button className='action'>Use</button>
        <button className='action'>Talk</button>
        <button className='action'>Spell</button>
      </div>
    </div>
  );
}



export default App;

