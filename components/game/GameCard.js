import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import deleteGame from '../../utils/data/gameData';

function GameCard({
  id,
  title,
  maker,
  numberOfPlayers,
  skillLevel,
  onUpdate,
}) {
  const deleteTheGame = () => {
    if (window.confirm(`Delete ${title}?`)) {
      deleteGame(id).then(() => onUpdate());
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>By: {maker}</Card.Title>
        <Card.Text>{numberOfPlayers} players needed</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
      <Link href={`/games/edit/${id}`} passHref>
        <Button variant="primary" className="m-2">Edit Game</Button>
      </Link>
      <Button variant="primary" className="m-2" onClick={deleteTheGame}>Delete Game</Button>
    </Card>
  );
}

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default GameCard;
