import styled from 'styled-components'

const PostLayout = styled.article`
  .date {
    color: ${({ theme }) => theme.color.lightGray};
  }
  h2 {
    margin: 2rem 0;
  }
  hr {
    margin: 0.5em 0;
  }
  pre {
    padding: 1rem;
  }
  pre,
  blockquote {
    background-color: #cfcfcf;
  }
  blockquote {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    margin: 1em 40px;
    border-left: 4px solid ${({ theme }) => theme.color.blue};
  }
`

export default PostLayout
