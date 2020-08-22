import React, { useReducer, useEffect } from 'react';

import Table from './Table';
import T3_useReducer, {
  initialState,
  SET_WINNER,
  RESET_GAME,
  GET_TURN,
} from './T3_useReducer';

const Tictaetoe = () => {
  const [state, dispatch] = useReducer(T3_useReducer, initialState);
  const { winner, latestWinner, turn, tabledata, recentcell } = state;

  useEffect(() => {
    const [row, cell] = recentcell;
    if (row < 0) {
      return;
    }
    let win = false;

    if (
      tabledata[row][0] === turn &&
      tabledata[row][1] === turn &&
      tabledata[row][2] === turn &&
      tabledata[row][3] === turn
    ) {
      win = true;
    }
    if (
      tabledata[row][1] === turn &&
      tabledata[row][2] === turn &&
      tabledata[row][3] === turn &&
      tabledata[row][4] === turn
    ) {
      win = true;
    }
    if (
      tabledata[0][cell] === turn &&
      tabledata[1][cell] === turn &&
      tabledata[2][cell] === turn &&
      tabledata[3][cell] === turn
    ) {
      win = true;
    }
    if (
      tabledata[1][cell] === turn &&
      tabledata[2][cell] === turn &&
      tabledata[3][cell] === turn &&
      tabledata[4][cell] === turn
    ) {
      win = true;
    }
    if (
      tabledata[0][0] === turn &&
      tabledata[1][1] === turn &&
      tabledata[2][2] === turn &&
      tabledata[3][3] === turn
    ) {
      win = true;
    }
    if (
      tabledata[1][1] === turn &&
      tabledata[2][2] === turn &&
      tabledata[3][3] === turn &&
      tabledata[4][4] === turn
    ) {
      win = true;
    }
    if (
      tabledata[0][1] === turn &&
      tabledata[1][2] === turn &&
      tabledata[2][3] === turn &&
      tabledata[3][4] === turn
    ) {
      win = true;
    }
    if (
      tabledata[1][0] === turn &&
      tabledata[2][1] === turn &&
      tabledata[3][2] === turn &&
      tabledata[4][3] === turn
    ) {
      win = true;
    }
    if (
      tabledata[0][4] === turn &&
      tabledata[1][3] === turn &&
      tabledata[2][2] === turn &&
      tabledata[3][1] === turn
    ) {
      win = true;
    }
    if (
      tabledata[1][3] === turn &&
      tabledata[2][2] === turn &&
      tabledata[3][1] === turn &&
      tabledata[4][0] === turn
    ) {
      win = true;
    }
    if (
      tabledata[0][3] === turn &&
      tabledata[1][2] === turn &&
      tabledata[2][1] === turn &&
      tabledata[3][0] === turn
    ) {
      win = true;
    }
    if (
      tabledata[1][4] === turn &&
      tabledata[2][3] === turn &&
      tabledata[3][2] === turn &&
      tabledata[4][1] === turn
    ) {
      win = true;
    }
    console.log(row, cell, tabledata, tabledata[row][cell], turn);
    if (win) {
      dispatch({ type: SET_WINNER, winner: turn, latestWinner: turn });
      //dispatch({ type: RESET_GAME });
    } else {
      let all = true;
      tabledata.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        console.log('all filled');
        // alert('승부를 내주시길,, ㅎㅎㅎ.');
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: GET_TURN });
      }
    }
  }, [recentcell]);

  return (
    <div>
      <Table tabledata={tabledata} dispatch={dispatch} winner={winner} />
      {latestWinner ? (
        <div>전판 {latestWinner}님의 승리</div>
      ) : (
        <div>전판 승부안남</div>
      )}
    </div>
  );
};

export default Tictaetoe;

//X를 자동으로 그려주는거 생각
