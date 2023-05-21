import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { IconButton } from "@mui/material";
import { Edit, Save } from "@mui/icons-material";

interface Label {
  id: string;
  name: string;
}
interface Note {
  id: string;
  title: string;
  content: string;
  labels: Label[];
  pinned: boolean;
}

function NoteView() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note>();
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>();

  const getNoteDetails = async () => {
    axios
      .get("http://localhost:8080/api/user/" + noteId, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setNote(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateNote = async () => {
    axios
      .put(
        "http://localhost:8080/api/user/edit",
        {
          id: note?.id,
          content: content,
          title: title,
          labels: note?.labels,
          pinned: note?.pinned,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        window.location.reload();
        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
        setEdit(false);
      });
  };

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    getNoteDetails();
    if (textareaRef.current) {
      textareaRef.current.addEventListener("change", handleTextareaChange);
    }
    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener("change", handleTextareaChange);
      }
    };
  }, []);

  return (
    <section className='min-h-screen relative'>
      <Navbar />
      {!edit && (
        <div className='p-12 space-y-10 text-slate-700'>
          <h1 className='text-5xl font-semibold'>{note?.title}</h1>
          <p>{note?.content}</p>
        </div>
      )}
      {edit && (
        <div className='flex flex-col p-12 space-y-10 text-slate-700'>
          <input
            type='text'
            className='text-5xl font-semibold border-b border-slate-300 focus:outline-none resize-none'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            ref={textareaRef as React.Ref<HTMLTextAreaElement>}
            value={content}
            className='focus:outline-none resize-none'
            onChange={(e) => {
              setContent(e.target.value);
              handleTextareaChange();
            }}
          />
          <IconButton className='w-fit' onClick={() => updateNote()}>
            <Save sx={{ fontSize: "3rem" }} />
          </IconButton>
        </div>
      )}
      <IconButton
        onClick={() => setEdit(true)}
        style={{ position: "absolute", bottom: "0", right: "0", margin: "2%" }}>
        <Edit sx={{ fontSize: "3rem" }} />
      </IconButton>
    </section>
  );
}

export default NoteView;
