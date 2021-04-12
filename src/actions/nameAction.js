export const CHANGE_NAME = "PLAYERNAME";

const nameAction = playerName => ({ type: CHANGE_NAME, payload: playerName });

export default nameAction;
