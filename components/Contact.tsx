import React from 'react'

const NAME = '준영'

const Contact = ({ home } : {home?:boolean}) => {
  return (
    <a style={{ color: '#000' }} href="mailto:junzero741@gmail.com">
      {home ? <h1 style={{ textAlign: 'center' }}>{NAME}</h1> : <h2 style={{ textAlign: 'center' }}>{NAME}</h2>}
    </a>
  )
}

export default Contact
