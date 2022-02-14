import * as S from './styles'

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="React Avançado Logo" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </S.Wrapper>
  )
}
