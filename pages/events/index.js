// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import EventCard from '../../components/event/EventCard';
// import { getEvents } from '../../utils/data/eventData';

// function Home() {
//   const [events, setEvents] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     getEvents().then((data) => setEvents(data));
//   }, []);

//   return (
//     <>
//       <Button
//         onClick={() => {
//           router.push('/events/new');
//         }}
//       >
//         Register New Event
//       </Button>
//       <article className="events">
//         <h1>Events</h1>
//         {events.map((event) => (
//           <section key={`event--${event.id}`} className="event">
//             <EventCard game={event.game} description={event.description} date={event.date} time={event.time} />
//           </section>
//         ))}
//       </article>
//     </>

//   );
// }

// export default Home;
