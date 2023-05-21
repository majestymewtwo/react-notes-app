import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { UserContext } from "../context/context";

function UserSignup() {
  const [firstName, setFirst] = useState<string>("");
  const [lastName, setLast] = useState<string>("");
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

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      alert("Please fill the details");
      return;
    }
    axios
      .post("http://localhost:8080/api/auth/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: "ROLE_STUDENT",
      })
      .then((res) => {
        context.setLoggedIn(true);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch(() => {
        setOpen(true);
        setMessage("Email already exitsts");
        setSeverity("error");
      });
  };
  return (
    <div className='w-full'>
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
      <form onSubmit={signup} className='flex flex-col space-y-2'>
        <TextField
          label='First Name'
          type='text'
          sx={{ color: "#7671DE" }}
          className='text-gray-700 bg-white'
          onChange={(e) => setFirst(e.target.value)}
        />
        <TextField
          label='Last Name'
          type='text'
          sx={{ color: "#7671DE" }}
          className='text-gray-700 bg-white'
          onChange={(e) => setLast(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type='submit'
          variant='contained'
          style={{ background: "#7671DE" }}>
          Signup
        </Button>
      </form>
    </div>
  );
}

export default UserSignup;
