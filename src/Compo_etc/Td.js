import React, { useCallback, useEffect, useRef } from 'react';
import { CLICK_TOE } from './T3_useReducer';
import { auto_tabledata } from '../Const_etc/auto_tabledata';
import { sleep } from '../Const_etc/sleep';

let other_tabledata = auto_tabledata;

const Td = ({ dispatch, rowIndex, cellIndex, cellData, winner }) => {
  const attrTd = useRef();

  useEffect(() => {
    console.log('useEffect');

    if (winner || other_tabledata.length < 1) {
      let auto_tabledataArray = [];

      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          auto_tabledataArray.push([i, j]);
        }
      }

      other_tabledata = auto_tabledataArray;
      attrTd.current.style.backgroundColor = '';
    }
  }, [winner]);

  const onClick = useCallback(() => {
    if (cellData) {
      console.log('hi');
      return;
    }

    dispatch({ type: CLICK_TOE, row: rowIndex, cell: cellIndex });

    async function randomerStart() {
      for (let index = 0; index < other_tabledata.length; index++) {
        if (
          other_tabledata[index][0] === rowIndex &&
          other_tabledata[index][1] === cellIndex
        ) {
          other_tabledata.splice(index, 1);
        }
      }
      await sleep(100);
      let your_index = other_tabledata.splice(
        Math.floor(Math.random() * other_tabledata.length),
        1,
      );
      dispatch({
        type: CLICK_TOE,
        row: your_index[0][0],
        cell: your_index[0][1],
      });
    }

    randomerStart();

    attrTd.current.style.backgroundColor = 'powderblue';
    console.log('Td/', [rowIndex, cellIndex], other_tabledata.length, winner);
  }, [cellData]);

  return (
    <td
      style={{
        border: '1px solid black',
        width: '45px',
        height: '45px',
        textAlign: 'center',
      }}
      onClick={onClick}
      ref={attrTd}
    >
      {cellData}
    </td>
  );
};

export default Td;
