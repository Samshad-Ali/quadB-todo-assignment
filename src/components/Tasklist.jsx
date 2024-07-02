import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Taskcard from "./Taskcard";
import { deleteNote, isCompletedNote, popupCard } from "../lib/redux/slice";
import useTasklist from "../hooks/useTasklist";

const Tasklist = () => {
  const {deleteHandler,updateHandler,completedHandler,notes} = useTasklist();
  return (
    <>
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        {
          notes?.length >0 ? notes?.map((note) => (
            <Taskcard
              note={note}
              key={note?.id}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
              completedHandler={completedHandler}
            />
          )) : <p className="px-4 p-2 bg-red-400 rounded-md">Note not found, create first</p>
        }
        
      </div>
    </>
  );
};

export default Tasklist;
