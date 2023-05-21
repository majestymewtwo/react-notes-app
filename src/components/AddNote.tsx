import { IconButton } from "@mui/material";
import { Close, Add} from "@mui/icons-material";
import { useState, useRef } from "react";
import axios from "axios";

interface AddNoteProps {
  status: Function;
}

function AddNote({ status }: AddNoteProps) {
  const [note, setNote] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>();

  const addNote = async () => {
    if (textareaRef.current && textareaRef.current?.value.length !== 0) {
      axios
        .post(
          "https://spring-notes-app.onrender.com/api/user/new",
          {
            title: title,
            content: content,
            labels: [],
            pinned: false,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          status(true);
          setTitle("");
          setContent("");
          handleTextareaChange();
          setNote(false);
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
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          handleTextareaChange();
        }}
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
