// gameId="",
// currentPlayer:0,
// noPlayers:0,
// players:[],
// playerWins:[]

const gameState = {}




/** @type {import('@sveltejs/kit').RequestHandler} */
export async function createGame({params}) {
  gameState 
}


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  // `params.id` comes from [id].js
  const item = await db.get(params.id);
 
  if (item) {
    return {
      body: { item }
    };
  }
 
  return {
    status: 404
  };
};