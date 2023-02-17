import { ReactNode } from "react"
interface HomeProps{
    children:ReactNode;
}
export default function HomeInterface ({children}:HomeProps){
    return(
        <>{children}</>
    )

}