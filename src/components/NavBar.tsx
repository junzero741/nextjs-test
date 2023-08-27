import Link from 'next/link'
import styled from 'styled-components'
import { Text } from './Text'

const NavBar = ({ currentPageId }: { currentPageId?: string }) => {
  return (
    <Layout>
      <Link href="/reviews">
        <a style={{ color: currentPageId === 'reviews' ? '#000' : '#999' }}>
          <Text as="h3">리뷰</Text>
        </a>
      </Link>
      <Link href="/todos">
        <a style={{ color: currentPageId === 'todos' ? '#000' : '#999' }}>
          <Text as="h3">할일</Text>
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
