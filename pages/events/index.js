import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import EventCard from '../../components/event/EventCard';
import { getEvents } from '../../utils/data/eventData';
import { useAuth } from '../../utils/context/authContext';

function Event() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getEvents(user.uid).then((data) => setEvents(data));
  }, [user, router]);

  return (
    <>
      <h1>Events</h1>
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
      >
        Register New Event
      </Button>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard game={event.game} description={event.description} date={event.date} time={event.time} organizer={event.organizer} id={event.id} eventObj={event} onUpdate={() => router.push('/events')} joined={event.joined} uid={user.uid} />
        </section>
      ))}
    </>
  );
}

export default Event;
