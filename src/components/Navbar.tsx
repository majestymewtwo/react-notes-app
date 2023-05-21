import { Logout, TextSnippet } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";
import { useContext, useState, useEffect } from "react";
import { getPicture, getSubject } from "../utils/JwtVerifier";
import newUser from "../assets/CREATOR.png";

export default function Navbar() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const [subject, setSubject] = useState<string>("");
  const [picture, setPicture] = useState<string>();

  useEffect(() => {
    if (context.isLoggedIn) {
      const token: any = localStorage.getItem("token");
      const authToken: any = localStorage.getItem("googleOauthToken");
      setPicture(getPicture(authToken));
      setSubject(getSubject(token));
    }
  }, [context]);

  const logOut = () => {
    context.setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("googleOauthToken");
    navigate("/");
  };
  return (
    <div className='px-3 py-5 border-b border-slate-300 bg-[#7671DE] flex justify-between items-center'>
      <Link
        to='/home'
        className='flex text-xl text-white space-x-2 items-center'>
        <TextSnippet />
        <h1>Notes App</h1>
      </Link>
      <div className='flex items-center space-x-6 text-white'>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          <img
            src={picture || newUser}
            alt='profile'
            className='object-cover object-center w-fit'
          />
        </div>
        <h1>{subject}</h1>
        <Logout onClick={logOut} className='text-white cursor-pointer' />
      </div>
    </div>
  );
}
