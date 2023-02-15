import { ReactNode } from "react"
interface MicrositeProps {
    children:ReactNode;
}
export default function Microsite ({children}:MicrositeProps){
    return(
        <>
        {children}
        </>
    )
}