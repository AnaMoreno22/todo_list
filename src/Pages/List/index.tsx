import React from "react";
import { AddIcon } from "../../Components/Icons";

// import { Container } from './styles';

const List: React.FC = () => {
  return (
    <div>
      <input className="add-item" placeholder="ADD ITEM" type="text" />
      <button
        onClick={() => console.log("a")}
        style={{
          marginLeft: -40,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default List;
