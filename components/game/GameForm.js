// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { createGame, getGameTypes } from '../../utils/data/gameData';

// const GameForm = ({ user }) => {
//   const [gameTypes, setGameTypes] = useState([]);
//   /*
//   Since the input fields are bound to the values of
//   the properties of this state variable, you need to
//   provide some default values.
//   */
//   const [currentGame, setCurrentGame] = useState({
//     skillLevel: 1,
//     numberOfPlayers: 0,
//     title: '',
//     maker: '',
//     gameTypeId: 0,
//   });
//   const router = useRouter();

//   useEffect(() => {
//     getGameTypes().then(setGameTypes);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentGame((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     // Prevent form from being submitted
//     e.preventDefault();

//     const game = {
//       maker: currentGame.maker,
//       title: currentGame.title,
//       number_of_players: Number(currentGame.numberOfPlayers),
//       skill_level: Number(currentGame.skillLevel),
//       game_type: Number(currentGame.gameTypeId),
//       user_id: user.uid,
//     };

//     // Send POST request to your API
//     createGame(game).then(() => router.push('/games'));
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Maker</Form.Label>
//           <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Number of Players</Form.Label>
//           <Form.Control name="number_of_players" required value={currentGame.number_of_players} onChange={handleChange} />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Skill Level</Form.Label>
//           <Form.Control name="skill_level" required value={currentGame.skill_level} onChange={handleChange} />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Game Type</Form.Label>
//           <Form.Select onChange={handleChange} className="mb-3" name="game_type" required>
//             <option value="">Select a Game Type</option>
//             {gameTypes.map((gameType) => (
//               <option defaultValue={gameType.id === currentGame.game_type_id} key={gameType.label} value={gameType.id}>
//                 {gameType.label}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// GameForm.propTypes = {
//   user: PropTypes.shape({
//     uid: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default GameForm;
