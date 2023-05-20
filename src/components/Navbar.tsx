import { Logout, TextSnippet } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';

export default function Navbar(){
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  }
    return (
      <div className='px-3 py-5 border-b border-slate-300 bg-[#7671DE] flex justify-between items-center'>
        <div className='flex text-xl text-white space-x-2 items-center'>
          <TextSnippet />
          <h1>Notes App</h1>
        </div>
        <Logout onClick={logOut} className='text-white cursor-pointer' />
      </div>
    );   

}