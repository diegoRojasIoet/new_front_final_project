import styled from 'styled-components';
import EmptyList from '../../../assets/EmptyList.svg';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';


const ContainerError = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContainerText = styled(ContainerError)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Figure = styled.figure`
  margin-bottom: 0;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const ContainerIcon = styled.span`
  position: relative;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: #4ab453;
  border-radius: 50%;
`;

const Text = styled.p`
  text-align: start;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

function EmptyTodos() {
  return (
    <ContainerError>
      <Figure>
        <Logo src={EmptyList} alt={'empty-img'} />
      </Figure>
      <ContainerText data-testid="emptyTextContainer">
        <Text>It looks like there's nothing else to do.</Text>
        <Text>
          Add a new todo with
          <IconContext.Provider value={{ className: 'plus_icon' }}>
            <ContainerIcon>
              <AiFillPlusCircle />
            </ContainerIcon>
          </IconContext.Provider>
          Button
        </Text>
      </ContainerText>
    </ContainerError>
  );
}

export { EmptyTodos };