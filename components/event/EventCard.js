import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game,
  description,
  date,
  time,
}) => (
  <Card className="text-center">
    <Card.Header>{game.title}</Card.Header>
    <Card.Body>
      <Card.Subtitle>{date}:{time}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default EventCard;
