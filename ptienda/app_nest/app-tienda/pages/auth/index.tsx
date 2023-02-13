import { Mundo } from "@/components";
import { AuthList } from "@/components/auth/authList";
import { useAuth } from "@/hooks/useAuth";

import { MainLayouts, PublicLayouts } from "@/layouts";
import { NextPage } from "next";
import React from 'react'


const authPage: NextPage = () => {
    const { auth, isLoading } = useAuth ('/auth');
    const respuesta = useAuth ('/auth');
   console.log(respuesta);
    console.log(isLoading, "c=", auth);
    return (
      <PublicLayouts>
        {
          (isLoading )
            ? <AuthList auths={ auth }  /> 
            : <Mundo />
  
        }
          
      </PublicLayouts>
    )
  }
  
  
  export default authPage