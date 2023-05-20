import { IconButton } from "@mui/material";
import { Close, Add } from "@mui/icons-material";
import { useState, useRef } from "react";

function AddNote() {
  const [note, setNote] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>();

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className='md:w-1/3 border space-y-4 border-slate-300 rounded-md p-4 mx-auto bg-[#f8f8f8] h-max'>
      {note && (
        <input
          placeholder='Title of your note'
          className='w-full focus:outline-none bg-inherit'
        />
      )}
      <textarea
        ref={textareaRef as React.Ref<HTMLTextAreaElement>}
        placeholder='Take a note...'
        className={`w-full focus:outline-none resize-none bg-inherit`}
        onClick={() => setNote(true)}
        onChange={handleTextareaChange}
      />
      {note && (
        <div className='flex justify-end'>
          <IconButton>
            <Add />
          </IconButton>
          <IconButton onClick={() => setNote(false)}>
            <Close />
          </IconButton>
        </div>
      )}
    </div>
  );
}
export default AddNote;
