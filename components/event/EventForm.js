import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getGames } from '../../utils/data/gameData';
import { createEvent, updateEvent } from '../../utils/data/eventData';

const EventForm = ({ user, eventObj }) => {
  const initialState = {
    id: '',
    game: null,
    description: '',
    date: '',
    time: '',
    organizer: user.uid,
  };
  const [games, setGames] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getGames().then(setGames);
    if (eventObj.id) {
      setCurrentEvent({
        id: eventObj.id,
        game: eventObj.game,
        description: eventObj.description,
        date: eventObj.date,
        time: eventObj.time,
      });
    }
  }, [eventObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      id: currentEvent.id,
      game: currentEvent.game,
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      organizer: user.uid,
    };

    if (eventObj.id) {
      const gameIncluded = { ...currentEvent, game_id: currentEvent.game };
      updateEvent(gameIncluded).then(() => router.push('/events'));
    } else {
      createEvent(event).then(() => router.push('/events'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Event Description</Form.Label>
          <Form.Control name="description" required value={currentEvent.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control name="date" required value={currentEvent.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control name="time" required value={currentEvent.time} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Game</Form.Label>
          <Form.Select onChange={handleChange} className="mb-3" name="game" required>
            <option value="">Select a Game for the Event</option>
            {games.map((game) => (
              <option defaultValue={game.id === currentEvent.game} key={game.title} value={game.id}>
                {game.title}
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

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    fbUser: PropTypes.shape({
      displayName: PropTypes.string,
    }).isRequired,
  }).isRequired,
  eventObj: PropTypes.shape({
    id: PropTypes.number,
    game: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }),
};

EventForm.defaultProps = {
  eventObj: PropTypes.shape({
    id: '',
    game: '',
    description: '',
    date: '',
    time: '',
  }),
};

export default EventForm;
