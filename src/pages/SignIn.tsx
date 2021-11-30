import SignInContainer from "../containers/SignInContainer";
import { Redirect } from "react-router";
import useToken from "../hooks/useToken";


export default function SignIn() {
  const token = useToken();
  
  if (token !== null) {
    return <Redirect to="/"/>
  }
  return (
    <>
      <SignInContainer />
    </>
  );
}
