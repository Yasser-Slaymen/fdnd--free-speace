import { ReactNode } from "react"
interface FrontendProps {
    children:ReactNode;
}
export default function FrontendProps1 ({children}:FrontendProps){
    return (
        <>
        {children}
        </>
    )
}