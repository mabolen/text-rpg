import { useState, useEffect } from 'react'
import App from '../App'

const CharCreate = () => {

  const [str, setStr] = useState(10)
  const [dex, setDex] = useState(10)
  const [intel, setInt] = useState(10)
  const [stam, setStam] = useState(10)
  const [points, setPoints] = useState(10)
  const [wep, setWep] = useState('')
  const [armor, setArmor] = useState('')
  const [createChar, setCreateChar] = useState(true)

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

  return (
    <div id='char-sheet' className="char-sheet">
      {points === 0 && createChar ? <button onClick={() => setCreateChar(false)}>Finalize Stats?</button> : null}
      <div className='char-sheet-title'>
        Character Sheet
        {createChar ? <div>Points: {points}</div> : null}
      </div>
      <ul className='stats'> Stats:
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
      <ul className='eq-list'> Equipment
        <li className='eq'>Weapon: {wep}</li>
        <li className='eq'>Armor: {armor}</li>
      </ul>
    </div>
  )
}

export default CharCreate;

