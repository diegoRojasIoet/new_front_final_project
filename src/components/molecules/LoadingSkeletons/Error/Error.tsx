import styled from 'styled-components'
import SrcError from '../../../../assets/Engranaje.svg'
const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:100%;

`
const Figure = styled.figure`
  width:12rem;
  height: 12rem ;

`
const Logo = styled.img`
  width:100%;
  height:100%;
`
const Text = styled.p`
  text-align:center;
`

function TodosError() {
    return (
        <ContainerError data-testid="todoError">
            <Figure>
                <Logo src={SrcError} alt={'error-img'} />
            </Figure>
            <Text>Error has been occurred, Please try again Later</Text>
        </ContainerError>

    )
}

export { TodosError }