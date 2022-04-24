const rooms = {
    town: {
        'town square': {
            description: "You find yourself in a town square with a bubbling fountain at the center. To the west is a dark alleyway. Laughter and conversation can be heard from a bar to the north.  A shop lies to the east. A long street continues south.",
            exits: {
                west: 'alley',
                east: 'shop',
                north: 'bar',
                south: 'street'
            },
            npcs: 'shadow'
        },
        'alley': {
            description: 'A stinky alleyway.',
            exits: {
                east: 'town square',
                north: 'house'
            },
            npcs: 'hobo',
            talk: true,
            speech: 'Some coin please?'
        },
        'house': {
            description: 'A small unoccupied home.',
            exits: {
                south: 'alley'
            }
        },
        'bar': {
            description: 'A busy bar.',
            exits: {
                south: 'town square'
            },
            npcs: 'soldier'
        },
        'shop': {
            description: 'You are in a shop.',
            exits: {
                west: 'town square'
            }
        },
        'street': {
            description: 'A narrow street.',
            exits: {
                north: 'town square'
            }
        }
    }
}

export default rooms