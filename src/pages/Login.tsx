import GoogleOauthLogin from "../components/GoogleOauthLogin";
import UserLogin from "../components/UserLogin";
import {Link} from 'react-router-dom';

function Login() {
  return (
    <section className='flex flex-col space-y-3 items-center justify-center min-h-screen md:w-2/3 lg:w-1/3 mx-auto p-4'>
      <h1 className='font-black text-4xl w-full'>Welcome</h1>
      <h4 className='text-slate-600 w-full'>
        Keeping track of your notes is now{" "}
        <span className='font-bold text-[#7671DE]'>simple and easy</span>
      </h4>
      <UserLogin />
      <div className='text-gray-600 w-full'>
        <h1 className='text-center'>or</h1>
      </div>
      <GoogleOauthLogin />
      <div className='text-sm text-gray-500 w-full justify-end flex'>
        <Link to='/signup'>New here? Create an account</Link>
      </div>
    </section>
  );
}

export default Login;
