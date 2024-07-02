import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNote } from '../lib/redux/slice';

const useTaskinput = () => {
  const {notes} = useSelector(state=>state.noteReducer);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const randomId = () => {
      const number = Math.floor(Math.random() * 1000);
      return number;
    };
    const addHandler = () => {
      if (text.length <= 0) {
        return toast.error("Title is required field.");
      } else {
        dispatch(addNote({ text, isDone: false, id: randomId() }));
        setText("");
      }
    };
    const enterKeyHandler=(e)=>{
      if((e.key==='Enter') && text?.length>0){
        dispatch(addNote({ text, isDone: false, id: randomId() }));
        setText("");
      }
    }
    useEffect(()=>{
      localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
  return{
    addHandler,enterKeyHandler,text,setText
  }
}

export default useTaskinput