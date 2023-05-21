import { Logout, TextSnippet, Token } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";
import { useContext, useState, useEffect } from "react";
import { getSubject } from "../utils/JwtVerifier";

export default function Navbar() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const [subject, setSubject] = useState<string>("");

  useEffect(() => {
    if (context.isLoggedIn) {
      const token: any = localStorage.getItem("token");
      setSubject(getSubject(token));
    }
  }, [context]);

  const logOut = () => {
    context.setLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className='px-3 py-5 border-b border-slate-300 bg-[#7671DE] flex justify-between items-center'>
      <div className='flex text-xl text-white space-x-2 items-center'>
        <TextSnippet />
        <h1>Notes App</h1>
      </div>
      <div className='flex items-center space-x-6 text-white'>
        <h1>{subject}</h1>
        <Logout onClick={logOut} className='text-white cursor-pointer' />
      </div>
    </div>
  );
}
