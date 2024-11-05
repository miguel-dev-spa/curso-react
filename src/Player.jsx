import PropTypes from 'prop-types';

const name = 'Messi';
const dorsal = 10;
const teams = ['Barcelona', 'PSG', 'Inter Miami']

import './Player.css';

export const Player = ({team}) => {
  return (
    <>
        <h2>{ name }</h2>
        <h3>{ dorsal }</h3>
        <p>{ team }</p>
        <ul>

        </ul>
    </>
  )
}

Player.propTypes = {
  team: PropTypes.string.isRequired
}

Player.defaultProps = {
  team: 'FCB'
}