import React, { useState } from 'react'
import styled from 'styled-components'
import GitHubIcon from './icons/GitHubIcon'

const NAME = '준영'

const Contact = ({ home }: { home?: boolean }) => {
  const [isRenderSnsIcons, setIsRenderSnsIcons] = useState(false)

  const onClickContact = () => {
    setIsRenderSnsIcons(s => !s)
  }

  return (
    <ContactLayout onClick={onClickContact}>
      {home ? <h1 style={{ textAlign: 'center' }}>{NAME}</h1> : <h2 style={{ textAlign: 'center' }}>{NAME}</h2>}
      <a href="https://github.com/junzero741" target="_blank" rel="noreferrer noopener">
        <GitHubIcon style={{ position: 'absolute', display: isRenderSnsIcons ? 'block' : 'none', top: '0.5rem', width: home? "32px" : "16px", height: home? "32px" : "16px" }} />
      </a>
    </ContactLayout>
  )
}

export default Contact

const ContactLayout = styled.div`
  position: relative;
  cursor: pointer;
  h1,h2 {
    &:hover {
      text-decoration: underline;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
`
