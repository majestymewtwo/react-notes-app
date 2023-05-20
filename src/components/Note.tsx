import { PushPinRounded, PushPinOutlined} from "@mui/icons-material"; 
import { IconButton } from "@mui/material";
import { useState } from "react";
interface NoteProps {
    title : string,
    content : string
}
function Note({title, content} : NoteProps) {
  const [pin,setPin]= useState(false);
  return (
    <div className='w-56 border space-y-4 border-slate-300 rounded-md p-4 mx-4 my-6 bg-[#f8f8f8] h-fit'>
      <div className="flex">
      <div className="w-1/2">
      <h1><b>{title}</b></h1>
      </div>
      <div className="w-1/2 px-14 mt-0">
      {!pin && <IconButton onClick={()=>setPin(true)}>
      <PushPinOutlined/>
      </IconButton>}
      {
        pin && <IconButton onClick={()=>setPin(false)}>
        <PushPinRounded/>
        </IconButton>
      }
      </div>
      </div>
      <p>
        {content}
      </p>
    </div>
  );
}
export default Note;
