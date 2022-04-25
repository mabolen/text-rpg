 import Display from './components/Display.js'
import npcs from './components/Npcs.js';
import rooms from './components/Rooms.js';
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
  const [health, setHealth] = useState(50)
  const [room, setRoom] = useState('creation')
  const [zone, setZone] = useState('town')
  const [target, setTarget] = useState(null)
  const [currentLog, setCurrentLog] = useState('')

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

  const moveRoom = (newRoom) => {
    setRoom(newRoom)
    setTarget('')
    setCurrentLog('')
  }

  const currentRoom = rooms[zone][room]
  const currentNpcs = currentRoom.npcs
  let npc
  currentNpcs ?  npc = npcs[currentNpcs]: 
  console.log(npc)

  const directionCheck = {
    west: currentRoom.exits.west ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.west)}>West</div> : null,
    east: currentRoom.exits.east ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.east)}>East</div> : null,
    north: currentRoom.exits.north ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.north)}>North</div> : null,
    south: currentRoom.exits.south ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.south)}>South</div> : null,
    up: currentRoom.exits.up ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.up)}>Up</div> : null,
    down: currentRoom.exits.down ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.down)}>Down</div> : null,
    begin: currentRoom.exits.begin ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.begin)}>Begin</div> : null
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

  //handle finalize stats
  const finalizeStats = () => {
    setCreateChar(false)
    setHealth(stam * 5)
  }
  
  //handle talk
  const talk = () => {
    target && npc.speech == undefined ? setCurrentLog('They have nothing to say.') :
    target ? setCurrentLog(`${target} says: ${npc.speech}`) : 
    setCurrentLog('Who are you talking to?')
  }

  return (
    <div className="container" id='main'>
    {/* Stats sheet */}
      <div id='char-sheet' className="char-sheet">
        {points === 0 && createChar ? <button className='finalize-btn' onClick={() => finalizeStats()}>Finalize Stats?</button> : null}
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
      
      {/* Primary Display */}
      <div id='display' className="display">
        {/* Name/HP/AC bar */}
        <div className='top-bar'>
          {createName ? <form><input id='name-input' type="text" onChange={event => {currentName = event.target.value}}></input><button onClick={()=> submitName()}>Choose Name</button></form>: null}
          {!createName ? <div className='top-item'>Name: {name}</div>: null}
          <div className='top-item'>HP: {health}</div>
          <div className='top-item'>AC: {equipment.armor.ac}</div>
        </div>
        <div className='text-display'>
          {currentRoom.description}
        <div className='npcs'>
          {currentNpcs ? <div className='npc'><a onClick={()=> {setTarget(npc.name)} }>{npc.name}</a>: {npc.description}</div> : null}
        </div>
        <div className='exit-title'>Exits:</div>
        <div className='exits'>
          {directionCheck.west}{directionCheck.east}{directionCheck.north}{directionCheck.south}{directionCheck.up}{directionCheck.down}{ !createChar && !createName ? directionCheck.begin : null}
        </div>
        {target ? <div> Target: {target}</div> : null}
        <div className='log'>{currentLog}</div>
        
      </div>
      {/* Action bar */}
      <div id='action-bar' className='action-bar'>
          <button className='action'>Attack</button>
          <button className='action'>Use</button>
          { currentNpcs && npc.speech ?<button className='action' onClick={()=>talk()}>Talk</button> : null}
          <button className='action'>Spell</button>
          {target ? <button className='action' onClick={()=> setTarget(null)}>Clear Target</button> : null}
        </div>
      </div>
      
    </div>
  );
}



export default App;

