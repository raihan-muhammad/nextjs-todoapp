import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Auth = ({ children }) => {
  const router = useRouter();
  const dataGlobal = useSelector((data) => data);
  console.log(dataGlobal);
  useEffect(() => {
    if (dataGlobal.auth.dataAuth === undefined) {
      router.push(`/`);
    }
  }, [dataGlobal.auth.dataAuth]);
  return <>{children}</>;
};

export default Auth;
