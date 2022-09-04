import FlexContainer from 'components/FlexContainer'
import Layout from 'components/layout'
import { Text } from 'components/Text'
import { Introduce } from 'pages'

const LoginIndex = () => {
  return (
    <Layout>
      <Introduce>
        <Text as="p">로그인 페이지입니다.</Text>
      </Introduce>
      <FlexContainer direction="column">
        <input type="text" placeholder="ID 를 입력하세요" />
        <input type="password" placeholder="PW 를 입력하세요" />
      </FlexContainer>
    </Layout>
  )
}

export default LoginIndex
