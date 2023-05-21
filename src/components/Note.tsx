import { PushPinRounded, PushPinOutlined, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div className="mb-3">
          <h1 className='text-slate-700'>
            <b>{title}</b>
          </h1>
        </div>
      </div>
      <Link to={`/note/${id}`}>
        <p className='max-h-96 overflow-y-hidden'>{content}</p>
      </Link>
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
      </div>
    </div>
  );
}
export default Note;
