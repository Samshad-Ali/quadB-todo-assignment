import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, isCompletedNote, popupCard } from '../lib/redux/slice';

const useTasklist = () => {
    const dispatch = useDispatch();
    const { notes } = useSelector((state) => state.noteReducer);
    const deleteHandler = (id) => {
      dispatch(deleteNote(id));
    };
    const updateHandler = () => {
      dispatch(popupCard(true))
    };
    const completedHandler = (id) => {
      dispatch(isCompletedNote(id));
    };
  return{
    updateHandler,completedHandler,deleteHandler,notes
  }
}

export default useTasklist