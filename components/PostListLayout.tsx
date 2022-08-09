import styled from 'styled-components'

const PostListLayout = styled.section`
  ${({ theme }) => theme.font.subTitle_3};
  font-weight: 400;
  padding-top: 1px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0 0 1.25rem;
  }
`

export default PostListLayout
