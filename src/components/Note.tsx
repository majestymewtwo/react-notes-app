import {
  PushPinRounded,
  PushPinOutlined,
  Delete,
  More,
} from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import NoteLabel from "./NoteLabel";

interface Label {
  id: string;
  name: string;
}
interface NoteProps {
  id: string;
  title: string;
  content: string;
  labels: Label[];
  pinned: boolean;
  status: Function;
}

function Note({ id, title, content, labels, pinned, status }: NoteProps) {
  // const [display, setDisplay] = useState<boolean>(false);
  const [addLabel, setAddLabel] = useState<boolean>(false);
  const [newLabel, setNewLabel] = useState<string>("");

  const addNewLabel = async () => {
    axios
      .put(
        "http://localhost:8080/api/user/addLabel/" + id,
        {
          name: newLabel,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        status(true);
        setAddLabel(false);
        setNewLabel("");
      })
      .catch((er) => console.log(er));
  };

  const deleteNote = async () => {
    axios
      .delete("http://localhost:8080/api/user/delete/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        status(true);
      })
      .catch((err) => console.log(err));
  };

  const togglePin = async () => {
    axios
      .put("http://localhost:8080/api/user/togglePin/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        status(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-56 border space-y-4 border-slate-300 rounded-md p-4 mx-4 my-6 bg-[#f8f8f8] h-fit'>
      <div className='flex'>
        <div className='mb-3'>
          <h1 className='text-slate-700'>
            <b>{title}</b>
          </h1>
        </div>
      </div>
      <Link to={`/note/${id}`}>
        <p className='max-h-96 overflow-y-hidden'>{content}</p>
      </Link>
      <div className='flex flex-wrap'>
        {labels.map((label) => (
          <NoteLabel name={label.name} key={label.id} />
        ))}
      </div>
      {addLabel && (
        <div>
          <Input
            type='text'
            placeholder='Add label'
            onChange={(e) => setNewLabel(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                addNewLabel();
              }
            }}
          />
        </div>
      )}
      <div className='flex justify-end'>
        <IconButton onClick={() => deleteNote()}>
          <Delete />
        </IconButton>
        {!pinned && (
          <IconButton onClick={() => togglePin()}>
            <PushPinOutlined />
          </IconButton>
        )}
        {pinned && (
          <IconButton onClick={() => togglePin()}>
            <PushPinRounded />
          </IconButton>
        )}
        <IconButton onClick={() => setAddLabel(true)}>
          <More />
        </IconButton>
      </div>
    </div>
  );
}
export default Note;
