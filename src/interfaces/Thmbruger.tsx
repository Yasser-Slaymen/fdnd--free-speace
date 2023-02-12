import {ReactNode } from "react";
interface HmburgerProps {
    children: ReactNode;
}
export default function Hmburger ({children}:HmburgerProps){
    return(
        <>
        {children}
        </>
    )
};