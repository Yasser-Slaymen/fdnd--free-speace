import Link from 'next/link'
interface LinknavProps {
    link:string;
    content:string;
}

export default function Linknav ({link, content}: LinknavProps){
    return(
        <>
        <Link href={link}>{content}</Link>
        </>
    )
}