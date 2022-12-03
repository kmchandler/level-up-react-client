import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteEvent, joinEvent, leaveEvent } from '../../utils/data/eventData';

function EventCard({
  id,
  game,
  description,
  date,
  time,
  onUpdate,
  joined,
  uid,
}) {
  const deleteTheEvent = () => {
    if (window.confirm(`Delete ${description}?`)) {
      deleteEvent(id).then(() => onUpdate());
    }
  };

  const leaveTheEvent = () => {
    leaveEvent(id, uid).then(() => onUpdate());
  };

  const joinTheEvent = () => {
    joinEvent(id, uid).then(() => onUpdate());
  };

  return (
    <Card className="text-center">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{date}:{time}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      {joined ? (<Button onClick={leaveTheEvent}>Leave</Button>) : (<Button onClick={joinTheEvent}>Join</Button>)}
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
  onUpdate: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
};

export default EventCard;
