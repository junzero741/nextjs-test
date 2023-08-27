import dynamic from "next/dynamic"

// import HtmlEditor from "src/components/HtmlEditor";
const HtmlEditor = dynamic(() => import("src/components/HtmlEditor"), {ssr: false});


export default function TilPage() {
 return (
  <HtmlEditor />
 )
}