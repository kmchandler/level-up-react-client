import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

function EventCard({
  id,
  game,
  description,
  date,
  time,
}) {
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
};

export default EventCard;
