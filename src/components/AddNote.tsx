import { IconButton } from "@mui/material";
import { Close, Add } from "@mui/icons-material";
import { useState, useRef } from "react";
import axios from "axios";

interface AddNoteProps {
  status: Function;
}

function AddNote({ status }: AddNoteProps) {
  const [note, setNote] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>();

  const addNote = async () => {
    if (textareaRef.current?.value.length !== 0) {
      console.log({
        title: title,
        content: textareaRef.current?.value,
        labels: [],
        pinned: false,
      });
      axios
        .post(
          "http://localhost:8080/api/user/new",
          {
            title: title,
            content: textareaRef.current?.value,
            labels: [],
            pinned: false,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          status(true);
          setTitle("");
        })
        .catch((err) => console.log(err));
    }
  };

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
          value={title}
          className='w-full focus:outline-none bg-inherit'
          onChange={(e) => setTitle(e.target.value)}
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
          <IconButton onClick={() => addNote()}>
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
