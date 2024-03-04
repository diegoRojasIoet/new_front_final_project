import { useEffect } from "react";
import styled from "styled-components";

const Header = styled.header`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin:1rem;
  color: white;
`;
const Counter = styled.p`
  font-size:1.4rem;
  line-height:2rem;

`

interface TodoCounterProps {
  totalTasks: number
  realizedTasks: number
  loading: boolean
  // Add any props if needed
}

const TodoCounter: React.FC<TodoCounterProps> = ({ totalTasks, realizedTasks, loading }) => {

  useEffect(() => {
    let pendingTasks = totalTasks - realizedTasks

    if (pendingTasks !== 0) {
      document.title = `Pending ${pendingTasks} Task`;
    } else {
      document.title = `No Pending Task`;
    }
  }, [realizedTasks, totalTasks])
  return (
    <Header>
      <h2>Tasks</h2>
      {!loading && <Counter>Completed {realizedTasks} of {totalTasks} tasks</Counter>}
      {loading && <Counter>Counting tasks...</Counter>}
    </Header>
  );
};

export { TodoCounter };