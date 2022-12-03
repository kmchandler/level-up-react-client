import { clientCredentials } from '../client';

const getEvents = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updateEvent = (data, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const createEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(event),
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

const leaveEvent = (eventId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/leave`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uid }),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const joinEvent = (eventId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ uid }),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});


// eslint-disable-next-line import/prefer-default-export
export { getEvents, createEvent, updateEvent, getSingleEvent, deleteEvent, leaveEvent, joinEvent };
