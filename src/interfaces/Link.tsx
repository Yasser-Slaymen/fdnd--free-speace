import Link from "next/link";
interface LinknavProps {
  link: string;
  content: string;
  className:string;
}

export default function Linknav({ link, content, className}: LinknavProps) {
  return (
    <>
      <Link className={className} href={link} >{content}</Link>
    </>
  );
}
