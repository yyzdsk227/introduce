import React from "react";
import Tr from "./Tr";

const Table = ({ tabledata, dispatch, winner }) => {
  return (
    <table>
      {Array(tabledata.length)
        .fill()
        .map((v, i) => (
          <Tr
            key={i}
            dispatch={dispatch}
            rowIndex={i}
            rowdata={tabledata[i]}
            winner={winner}
          />
        ))}
    </table>
  );
};

export default Table;
