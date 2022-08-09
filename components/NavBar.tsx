import Link from 'next/link'
import styled from 'styled-components'

const NavBar = ({ currentPageId }: { currentPageId?: string }) => {
  return (
    <Layout>
      <Link href="/reviews">
        <a style={{ color: currentPageId === 'reviews' ? '#000' : '#999' }}>
          <h3>리뷰</h3>
        </a>
      </Link>
    </Layout>
  )
}

export default NavBar

const Layout = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  ${({ theme }) => theme.font.subTitle_3};
`
