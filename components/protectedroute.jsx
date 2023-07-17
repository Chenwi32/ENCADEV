import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "./authcontprov";
/* import { parseCookies } from "./parseCookie"; */
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  /*  const cookies = parseCookies(req);
  const [initialRemember, setInitialRemember] = useState(cookies.rememberMe);
  useEffect(() => {
    setInitialRemember(JSON.stringify(cookies.rememberMe));
  }); */

  const { user } = useAuth();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if  (user){
        router.push("/dash_board");
      } else {
        toast({
          title: "Warning!!",
          description: "You don't have permission to access this page",
          status: "warning",
          duration: 6000,
          isClosable: true,
          position: "top-right",
        });
        router.push("/login");
      }
    });
  }, [user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
