import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useState } from "react";

function GoogleOauthLogin() {
  const [message, setMessage] = useState<string>();
  const [severity, setSeverity] = useState<AlertColor>();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const responseGoogle = async (auth: CredentialResponse) => {
    const params = new URLSearchParams({
      token: auth.credential as string,
    });
    axios
      .post("http://localhost:8080/api/auth/authenticate/google?" + params)
      .then((res) => console.log(res.data))
      .catch(() => {
        setOpen(true);
        setMessage("Error has occured");
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
      <GoogleLogin
        auto_select={false}
        text='signin_with'
        onSuccess={responseGoogle}
      />
    </div>
  );
}

export default GoogleOauthLogin;
