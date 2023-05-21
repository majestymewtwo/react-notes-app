import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { UserContext } from "../context/context";

function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>();
  const [severity, setSeverity] = useState<AlertColor>();
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setOpen(true);
      setMessage("Enter Credentials");
      setSeverity("error");
      return;
    }
    axios
      .post("https://spring-notes-app.onrender.com/api/auth/authenticate", {
        email: email,
        password: password,
      })
      .then((res) => {
        context.setLoggedIn(true);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch(() => {
        setOpen(true);
        setMessage("Invalid Credentials");
        setSeverity("error");
      });
  };
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <Snackbar
        className={"mt-14"}
        open={open}
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <form onSubmit={loginUser} className='flex flex-col space-y-2 w-full'>
        <TextField
          label='Email'
          type='email'
          sx={{ color: "#7671DE" }}
          className='text-gray-700 bg-white'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type={"password"}
          className='text-gray-700 bg-white'
          aria-hidden='true'
          onChange={(e) => setPassword(e.target.value)}
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
