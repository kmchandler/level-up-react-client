import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleGame = (gameId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${gameId}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
      maker: data.maker,
      title: data.title,
      number_of_players: Number(data.numberOfPlayers),
      skill_level: Number(data.skillLevel),
      game_type: Number(data.gameTypeId),
      user_id: user.uid,
      });
    })
    .catch((error) => reject(error));
});

const updateGame = (user, game, id) => new Promise((resolve, reject) => {
  const convertedGame = {
    id: game.id,
    maker: game.maker,
    title: game.title,
    number_of_players: Number(game.numberOfPlayers),
    skill_level: Number(game.skillLevel),
    game_type: Number(game.gameTypeId),
    user_id: user.uid,
  }
  fetch(`${clientCredentials.databaseURL}/games/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(convertedGame),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const createGame = (user, game) => new Promise((resolve, reject) => {
  const convertedGame = {
    id: game.id,
    maker: game.maker,
    title: game.title,
    number_of_players: Number(game.numberOfPlayers),
    skill_level: Number(game.skillLevel),
    game_type: Number(game.gameTypeId),
    user_id: user.uid,
  }
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteGame = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${id}`, {
    method: 'DELETE',
  }).then(resolve).catch(reject);
});


export { getGames, createGame, getGameTypes, updateGame, getSingleGame, deleteGame };
