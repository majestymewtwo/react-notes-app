import jwtDecode from "jwt-decode";
export const isTokenValid = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000; // divide by 1000 to convert to seconds
    if (decodedToken.exp < currentTime) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};
export const getRole = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.role;
  } catch (error) {
    return error;
  }
};
export const getSubject = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.sub;
  } catch (err) {
    return false;
  }
};
export const getPicture = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token);
    return decodedToken.picture;
  } catch (err) {
    return false;
  }
};
