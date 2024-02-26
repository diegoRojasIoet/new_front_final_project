import styled from "styled-components";

const Header = styled.header`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin:1rem;
`;
const Title = styled.h2`
  color:#5E454B;
`
const Counter = styled.p`
  font-size:1.4rem;
  line-height:2rem;
  color:#5E454B;

`

interface TodoCounterProps {
  // Add any props if needed
}

const TodoCounter: React.FC<TodoCounterProps> = () => {
  return (
    <Header>
      <Title>Tasks</Title>
      <Counter>Completed 5 of 10 tasks</Counter>
      <Counter>Counting tasks...</Counter>
    </Header>
  );
};

export { TodoCounter };