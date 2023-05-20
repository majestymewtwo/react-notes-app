import { Button, TextField } from "@mui/material";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function UserLogin() {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className='w-full'>
      <form onSubmit={loginUser} className='flex flex-col space-y-2'>
        <TextField
          label='Email'
          type='email'
          sx={{ color: "#7671DE" }}
          className='text-gray-700 bg-white'
        />
        <TextField
          label='Password'
          type={show ? "text" : "password"}
          className='text-gray-700 bg-white'
          aria-hidden='true'
        />
        <Button
          type='submit'
          variant='contained'
          style={{ background: "#7671DE" }}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default UserLogin;
