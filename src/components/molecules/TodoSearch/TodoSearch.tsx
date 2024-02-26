
import styled from 'styled-components';
import '../../../index.css'
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';
import { ChangeEvent } from 'react';

const Input = styled.input`
  position:relative;
  border:10rem;
  height: 1.5rem;
  width: 16rem;
  padding: 1rem;
  border-radius:1rem;
  border-color:#F3F0D7;
  outline:none;
    &::placeholder{
      color:grey;
    }
  
  
`
const ContainerInpunt = styled.div`
  display: flex;
  width:100%;
  height:3rem;
  justify-content: center;
  align-items:center;
  
`
interface TodoSearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  loading: boolean;
}

const TodoSearch: React.FC<TodoSearchProps> = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <ContainerInpunt >
      <Input
        placeholder="Search task"
        type="text"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
      <IconContext.Provider value={{ className: "search_icon" }}>
        <FaSearch data-testid='searchIcon' />
      </IconContext.Provider>
    </ContainerInpunt>
  );
};

export { TodoSearch };