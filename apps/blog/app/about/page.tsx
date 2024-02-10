import { twMerge } from "tailwind-merge";

export default async function About() {

  return (
    <div>
      <div className={'mb-4'}>코드를 작성하고, 지우는 일을 합니다.</div>
      <div>
        <li>
         소속: <OuterLink href="https://www.berapt.com/" target={"_blank"}>BeRapt</OuterLink>
        </li>
        <li>
         <OuterLink href="https://github.com/junzero741" target={'_blank'}>GitHub</OuterLink>
        </li>
        <li>
         이메일: junzero741@gmail.com
        </li>
      </div>
    </div>
  )
}

function OuterLink (props: JSX.IntrinsicElements['a']) {
  const {className, children, ...rest} = props; 

  return (
    <a className={twMerge("underline", className)} {...rest}>{children}</a>
  )
}