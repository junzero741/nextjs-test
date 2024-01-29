import { ImageResponse } from 'next/og';
import { CSSProperties } from 'react';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const author = '정준영';
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  return new ImageResponse(
    (
      <div style={wrapperStyle}>
        <div style={headerStyle}></div>
        <div style={bodyStyle}>
          <div style={titleStyle}>{title}</div>
          {description && 
            <div style={descriptionStyle}>{description}</div>
          }
        </div>
        <div style={footerStyle}>
          <div style={authorStyle}>{author}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: 40,
  color: 'black',
  background: 'white',
  width: '100%',
  height: '100%',
  padding: '16px',
  textAlign: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const headerStyle: CSSProperties = {
  display: 'flex'
}

const bodyStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}

const footerStyle: CSSProperties = {
  display: 'flex'
}

const titleStyle: CSSProperties = {
  display: 'flex',
  fontWeight: 900,
  wordBreak: 'keep-all',
  fontSize: 60
}

const descriptionStyle: CSSProperties = {
  display: 'flex',
  fontWeight: 'normal',
  wordBreak: 'keep-all',
  fontSize: 40
}


const authorStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  fontWeight: 'bold',
  fontSize: 48
}