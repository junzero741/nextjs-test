import Layout, { siteTitle } from 'components/Temp'
import Head from 'next/head'
import styled from 'styled-components'
import SiteMap from './sitemap.xml'
import NavBar from 'components/NavBar'
import { Text } from 'components/Text'
import { useRef } from 'react'

export default function HomePage() {
  const pRef = useRef<HTMLParagraphElement | null>(null)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <SiteMap />
      </Head>
      <Introduce>
        <Text as="p" ref={pRef}>
          사적인 경험과 공적인 지식들을 공유합니다.
        </Text>
      </Introduce>
      <NavBar />
    </Layout>
  )
}

export const Introduce = styled.section`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.gray};
`
