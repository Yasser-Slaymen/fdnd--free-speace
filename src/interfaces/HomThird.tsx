import { ReactNode } from "react";
interface HomThirdProps {
    children:ReactNode;
}
export default function HomThird ({children}: HomThirdProps){
    return (
        <>
        {children}
        </>
    )
}