import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createGame, getGameTypes, updateGame } from '../../utils/data/gameData';

const GameForm = ({ user, gameObj }) => {
  const [gameTypes, setGameTypes] = useState([]);
  const initialState = {
    id: '',
    skill_level: 1,
    numberOfPlayers: 0,
    title: '',
    maker: '',
    game_type: 0,
  };
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getGameTypes().then(setGameTypes);
    if (gameObj.id) {
      setCurrentGame(gameObj);
    }
  }, [gameObj]);
  console.warn(currentGame, 'current game');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    if (gameObj.id) {
      updateGame(user, currentGame, gameObj.id).then(() => router.push('/games'));
    } else {
      createGame(user, currentGame).then(() => router.push('/games'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Maker</Form.Label>
          <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Players</Form.Label>
          <Form.Control name="number_of_players" required value={currentGame.number_of_players} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Skill Level</Form.Label>
          <Form.Control name="skill_level" required value={currentGame.skill_level} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Game Type</Form.Label>
          <Form.Select onChange={handleChange} className="mb-3" name="game_type" required>
            <option value="">Select a Game Type</option>
            {gameTypes.map((gameType) => (
              <option defaultValue={gameType.id === currentGame.game_type_id} key={gameType.label} value={gameType.id}>
                {gameType.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  gameObj: PropTypes.shape({
    id: PropTypes.number,
    numberOfPlayers: PropTypes.number,
    skillLevel: PropTypes.number,
    title: PropTypes.string,
    maker: PropTypes.string,
    gameTypeId: PropTypes.number,
  }),
};

GameForm.defaultProps = {
  gameObj: PropTypes.shape({
    id: '',
    number_of_players: '',
    skill_level: '',
    title: '',
    maker: '',
    game_type: '',
  }),
};

export default GameForm;
