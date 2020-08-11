import React, { useCallback, useEffect, useRef } from "react";
import { CLICK_TOE, GET_TURN } from "./ToeReducer";
import { auto_tabledata } from "../Const_etc/auto_tabledata";

let other_tabledata = auto_tabledata;

const Td = ({ dispatch, rowIndex, cellIndex, cellData, winner }) => {
  const attrTd = useRef();

  useEffect(() => {
    console.log("useEffect");

    if (winner || other_tabledata.length < 1) {
      // console.log("--------------autio----------------------");
      let auto_tabledataArray = new Array();

      for (let i = 0; i < 5; i++) {
        //auto_tabledataArray.push([i]);
        for (let j = 0; j < 5; j++) {
          auto_tabledataArray.push([i, j]);
        }
      }

      other_tabledata = auto_tabledataArray;
      console.log(other_tabledata);
      attrTd.current.style.backgroundColor = "";
    }
  }, [winner]);

  const onClick = useCallback(() => {
    if (cellData) {
      console.log("hi");
      return;
    }

    console.log("11/", [rowIndex, cellIndex], other_tabledata.length, winner);

    for (let index = 0; index < other_tabledata.length; index++) {
      if (
        other_tabledata[index][0] === rowIndex &&
        other_tabledata[index][1] === cellIndex
      ) {
        other_tabledata.splice(index, 1);
      }
    }

    dispatch({ type: CLICK_TOE, row: rowIndex, cell: cellIndex });

    for (var i = 0; i < other_tabledata.length; i++) {
      console.log("21/", other_tabledata[i], other_tabledata.length);
    }

    dispatch(setTimeout(() => ({ type: GET_TURN }), 49));
    setTimeout(() => {
      let your_index = other_tabledata.splice(
        Math.floor(Math.random() * other_tabledata.length),
        1
      );

      console.log("31/", your_index[0][0], your_index[0][1]);

      for (var i = 0; i < other_tabledata.length; i++) {
        console.log("36/", other_tabledata[i], other_tabledata.length);
      }

      console.log(
        "41/",
        other_tabledata.includes([1, 1]),
        other_tabledata.length
      );
      dispatch({
        type: CLICK_TOE,
        row: your_index[0][0],
        cell: your_index[0][1],
      });
    }, 85);

    attrTd.current.style.backgroundColor = "powderblue";
  }, [cellData]);

  return (
    <td
      style={{
        border: "1px solid black",
        width: "45px",
        height: "45px",
        textAlign: "center",
      }}
      onClick={onClick}
      ref={attrTd}
    >
      {cellData}
    </td>
  );
};

export default Td;
