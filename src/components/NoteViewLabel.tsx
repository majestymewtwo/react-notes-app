import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";

interface LabelProps {
  id: string;
  name: string;
  status: Function;
}

function NoteViewLabel({ id, name, status }: LabelProps) {
  const deleteLabel = async () => {
    axios
      .delete(
        "https://spring-notes-app.onrender.com/api/user/deleteLabel/" + id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then(() => status(true))
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className='bg-slate-500 w-fit py-1 px-2 text-xs rounded-lg text-white m-1 flex items-center'>
      <h1 className='text-lg'>{name}</h1>
      <IconButton
        onClick={() => {
          deleteLabel();
        }}>
        <Close sx={{ color: "white", fontSize: "14px" }} />
      </IconButton>
    </div>
  );
}
export default NoteViewLabel;
