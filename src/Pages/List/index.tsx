import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../Components/Icons";
import { IItem } from "../../types/list";

const List: React.FC = () => {
  const [items, setItems] = useState(() => {
    const saved: any = localStorage.getItem("TODOLIST");
    let initialValue: IItem[] = JSON.parse(saved);
    return initialValue || [];
  });
  const [removing, setRemoving] = useState(false);
  const [value, setValue] = useState("");
  function addItem(event: any) {
    setValue("");

    event.preventDefault();
    const newItemName = event?.target?.new_item?.value || "";
    const itemAlreadyExists = items.find((item) => item.name === newItemName);
    if (!itemAlreadyExists) {
      const newData = [...items, { name: newItemName, checked: false }];
      setItems(newData);
      localStorage.setItem("TODOLIST", JSON.stringify(newData));
    } else {
      alert("Item has been already saved");
    }
  }

  function removeItem(name: string) {
    setRemoving(true);
    const filteredList = items.filter((item) => item.name !== name);
    if (filteredList) {
      setItems(filteredList);
      localStorage.setItem("TODOLIST", JSON.stringify(filteredList));
      setRemoving(false);
    }
  }

  function checkItem(item: IItem) {
    const itemIndex = items.findIndex((i) => i.name === item.name);
    const newData = [...items];
    newData[itemIndex] = { name: item.name, checked: !item?.checked };
    setItems(newData);
    localStorage.setItem("TODOLIST", JSON.stringify(newData));
  }

  if (removing) {
    return <></>;
  }

  return (
    <>
      <form onSubmit={addItem}>
        <input
          onChange={(event) => setValue(event.target.value)}
          value={value}
          name="new_item"
          className="add-item"
          placeholder="ADD ITEM"
          type="text"
        />
        <button type="submit" className="add-item-buttom">
          <AddIcon />
        </button>
      </form>
      <div style={{ marginTop: 20, maxHeight: 800, overflow: "auto" }}>
        <table
          style={{
            borderSpacing: 0,
          }}
        >
          {items.map((item, index) => {
            return (
              <tr
                style={{
                  background: index % 2 === 0 ? "#D1D1D1" : "white",
                  height: 40,
                  verticalAlign: "middle",
                }}
              >
                <td width="30px">
                  <input
                    data-row-id={item.name}
                    onChange={() => checkItem(item)}
                    defaultChecked={item.checked}
                    type="checkbox"
                  />
                </td>
                <td
                  style={{
                    maxWidth: 650,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                  width="650px  "
                >
                  {item.name}
                </td>
                <td className="cursor-pointer" width="30px">
                  <button
                    className="cursor-pointer"
                    onClick={() => removeItem(item.name)}
                    style={{ background: "none", border: "none" }}
                  >
                    <RemoveIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default List;
