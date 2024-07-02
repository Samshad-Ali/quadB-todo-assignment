import { createSlice } from "@reduxjs/toolkit";

const allSavedNotes = JSON.parse(localStorage.getItem('notes'));
const slice = createSlice({
  name: "/noteSlice",
  initialState: {
    notes:allSavedNotes?allSavedNotes: [],
    isPopup:false
  },
  reducers: {
    addNote: (state, action) => {
        state.notes = [...state.notes,action.payload];
    },
    deleteNote: (state, action) => {
      const index = state.notes.findIndex(item=>item.id===action.payload);
      if(index !== -1){
         state.notes.splice(index,1)
      }
    },
    isCompletedNote: (state, action) => {
      const index = state.notes.findIndex(item=>item.id===action.payload);
      if(index !== -1){
         state.notes[index].isDone = true;
      }
    },
    updateNote:(state,action)=>{
      const index = state.notes.findIndex(item=>item.id===action.payload.id);
      if(index !== -1){
         state.notes[index].text = action.payload.text;
         state.isPopup=false
      }
    },
    popupCard:(state,action)=>{
      state.isPopup = action.payload;
    }
  },
});

export default slice.reducer;
export const  {addNote,deleteNote,isCompletedNote,updateNote,popupCard} = slice.actions;