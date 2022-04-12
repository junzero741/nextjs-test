import Link from "next/link";
import utilStyles from "styles/utils.module.css";

const NavBar = ({currentPageId} : {currentPageId? : string}) => {
    return(
      <div className={utilStyles.flex} style={{justifyContent:'flex-start', gap: '1rem'}}>
					<Link href="/reviews"><a className={currentPageId === "reviews" ? utilStyles.selected : utilStyles.unselected}><h2 className={utilStyles.headingLg}>경험</h2></a></Link>
					<Link href="/articles"><a className={currentPageId === "articles" ? utilStyles.selected : utilStyles.unselected}><h2 className={utilStyles.headingLg}>지식</h2></a></Link>
      </div>
    )
  }

export default NavBar;