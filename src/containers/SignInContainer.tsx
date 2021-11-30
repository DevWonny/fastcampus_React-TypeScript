import { useCallback } from "react";
import { useDispatch } from "react-redux";
import SignIn from "../components/SignIn";
import { login as loginSagaStart } from '../redux/modules/auth';

export default function SignInContainer() {
  const dispatch = useDispatch();
  const login = useCallback((reqData) => {
    dispatch(loginSagaStart(reqData));
  }, [dispatch]);
  
  return (
    <SignIn login={login}/>
  )
}