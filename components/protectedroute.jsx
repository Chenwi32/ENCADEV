import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./authcontprov";


const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (!user.uid) {
       toast({
         title: "Warning!!",
         description: "You don't have persion to access this page",
         status: 'warning',
         duration: 9000,
         isClosable: true,
         position: 'top-right'
       });
      router.push("/login");
    }
  
  }, [user])
  
  
   

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
