import Head from 'next/head'
import Image from 'next/image'
// import styles from './layout.module.css'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const name = '준영'
export const siteTitle = '준영'

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <PageLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="header">
        {home ? (
          <ImageRoundContainer>
            <Image priority src="/images/profile.png" height={144} width={144} alt={name} />

            <a style={{ color: '#000' }} href="mailto:junzero741@gmail.com">
              <Headline style={{ textAlign: 'center' }}>{name}</Headline>
            </a>
          </ImageRoundContainer>
        ) : (
          <ImageRoundContainer>
            <Link href="/">
              <a>
                <Image priority src="/images/profile.png" height={108} width={108} alt={name} />
              </a>
            </Link>
            <SubTitle2 style={{textAlign: 'center'}}>
              <a style={{ color: '#000'}} href="mailto:junzero741@gmail.com">
                {name}
              </a>
            </SubTitle2>
          </ImageRoundContainer>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </PageLayout>
  )
}

const PageLayout = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .backToHome {
    margin: 3rem 0 0;
  }
`

const ImageRoundContainer = styled.div`
  img {
    border-radius: 9999px;
  }
`
const SubTitle2 = styled.h2`
  ${({ theme }) => theme.font.subTitle_2};
`

const Headline = styled.h1`
  ${({ theme }) => theme.font.headline};
`
