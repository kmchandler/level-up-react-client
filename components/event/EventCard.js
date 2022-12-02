import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import deleteEvent from '../../utils/data/eventData';

function EventCard({
  id,
  game,
  description,
  date,
  time,
  eventObj,
  onUpdate,
}) {
  const deleteTheEvent = () => {
    if (window.confirm(`Delete ${eventObj.description}?`)) {
      deleteEvent(eventObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{date}:{time}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Link href={`/events/edit/${id}`} passHref>
        <Button variant="primary" className="m-2">Edit Event</Button>
      </Link>
      <Button variant="primary" className="m-2" onClick={deleteTheEvent}>Delete Event</Button>
    </Card>
  );
}

EventCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  eventObj: PropTypes.shape({
    game: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;
