import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Editcard from "./Editcard";
import { useSelector } from "react-redux";

const Taskcard = ({ note,deleteHandler,updateHandler, completedHandler}) => {
    const { isPopup } = useSelector((state) => state.noteReducer);
  return (
    <>
    <div className={`${note?.isDone && "bg-gray-400"} w-[310px] flex items-center justify-between md:w-[420px] bg-green-200 rounded-md p-4`}>
      <h3 className={`font-semibold ${note?.isDone && 'line-through'}`}>{note?.text}</h3>
      <div className="flex items-center gap-4">
        <button className=" rounded-md bg-red-400 p-2 hover:bg-red-500 transition-all"
        onClick={()=>{deleteHandler(note?.id)}}
        >
          <AiOutlineDelete size={18} />
        </button>
        <button className=" rounded-md bg-blue-400 p-2 hover:bg-blue-500 transition-all"
        onClick={()=>{completedHandler(note?.id)}}
        
        >
          <MdOutlineDone size={18} />
        </button>
        <button className ={`${note?.isDone && 'cursor-not-allowed'} rounded-md bg-yellow-400 p-2 hover:bg-yellow-500 transition-all`}
        onClick={updateHandler}
        disabled={note?.isDone}
        >
          <CiEdit size={18} />
        </button>
      </div>
    </div>
    {isPopup && <Editcard id={note?.id} />}
    
            </>
  );
};

export default Taskcard;
