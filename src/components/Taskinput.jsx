
import useTaskinput from "../hooks/useTaskinput";
const Taskinput = () => {
 const {text,setText,addHandler,enterKeyHandler} = useTaskinput();
  return (
    <div className=" w-full  flex gap-4 items-center justify-center">
      <input
        type="text"
        placeholder="Text here..."
        className="flex-1 p-2 rounded-md bg-gray-200 border-none outline-none "
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyUp={enterKeyHandler}

      />
      <button
        onClick={addHandler}
        className="w-20 p-2 bg-green-500 rounded-md hover:bg-green-600 transition-all "
      >
        Add{" "}
      </button>
    </div>
  );
};

export default Taskinput;
