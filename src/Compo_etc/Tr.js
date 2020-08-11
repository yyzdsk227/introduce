import React from "react";
import Td from "./Td";

const Tr = ({ dispatch, rowIndex, rowdata, winner }) => {
  return (
    <tr>
      {Array(rowdata.length)
        .fill()
        .map((v, i) => (
          <Td
            key={i}
            dispatch={dispatch}
            rowIndex={rowIndex}
            cellIndex={i}
            cellData={rowdata[i]}
            winner={winner}
          />
        ))}
    </tr>
  );
};

export default Tr;
