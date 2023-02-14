import {ReactNode } from "react";
interface HavtampletProps{
children:ReactNode;
}
export default function Havtamplet ({children}:HavtampletProps){
    return(
        <>
        {children}
        </>
    )
}