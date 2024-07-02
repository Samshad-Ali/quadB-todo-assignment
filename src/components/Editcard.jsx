import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../lib/redux/slice";

const Editcard = ({id}) => {
    const dispatch = useDispatch();
  const [editText, setEditText] = useState("");
  const EditHandler = (id) => {
    dispatch(updateNote({id,text:editText}))
  };
  return (
    <div className="absolute top-40 right-50 bg-red-200 w-[310px] h-[100px] rounded-md p-4 flex gap-4 items-center transition-all duration-150 justify-center">
      <input
        type="text"
        placeholder="Text here..."
        className="flex-1 p-2 rounded-md bg-gray-200 border-none outline-none "
        value={editText}
        onChange={(e) => {
          setEditText(e.target.value);
        }}
      />
      <button
        onClick={()=>{EditHandler(id)}}
        className="w-20 p-2 bg-green-500 rounded-md hover:bg-green-600 transition-all "
      >
        Edit
      </button>
    </div>
  );
};

export default Editcard;
