import React from 'react'
import { useState } from 'react'
import rooms from './Rooms'
import npcs from './Npcs'

const Display = (props) => {

  const [room, setRoom] = useState('town square')
  const [zone, setZone] = useState('town')
  
  const moveRoom = (newRoom) => {
    setRoom(newRoom)
  }

  const currentRoom = rooms[zone][room]
  const currentNpcs = currentRoom.npcs
  const npc = npcs[currentNpcs].description

  console.log(currentNpcs)
  console.log(npc)
  console.log(npcs[currentNpcs].description)

  const directionCheck = {
    west: currentRoom.exits.west ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.west)}>West</div> : null,
    east: currentRoom.exits.east ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.east)}>East</div> : null,
    north: currentRoom.exits.north ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.north)}>North</div> : null,
    south: currentRoom.exits.south ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.south)}>South</div> : null,
    up: currentRoom.exits.up ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.up)}>Up</div> : null,
    down: currentRoom.exits.down ? <div className='exit' onClick={()=> moveRoom(currentRoom.exits.down)}>Down</div> : null
  }

  return (
    <div id='display' className="display">
      <div className='text-display'>
        {currentRoom.description}
        <div className='npcs'>
          {currentNpcs ? <div className='npc'>{npc}</div> : null}
        </div>
        <div className='exit-title'>Exits:</div>
        <div className='exits'>
          {directionCheck.west}{directionCheck.east}{directionCheck.north}{directionCheck.south}{directionCheck.up}{directionCheck.down}
        </div>
      </div>
      
    </div>
  )
}

export default Display