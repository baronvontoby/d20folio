import React from 'react';

const CharacterCard = props => (
    <div>
        {props.character.name}
        <img src={props.character.imageUrl} alt=''></img>
    </div>
)


export default CharacterCard;