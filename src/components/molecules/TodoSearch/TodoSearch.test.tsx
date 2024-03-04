import { describe, it, expect  } from 'vitest';
import {
    render, screen
  } from '@testing-library/react';
import { TodoSearch } from './TodoSearch';
  
describe('<Search component/> UI Testing', () => {
  // beforeEach(() => setup());
  it('render', () => {
    render(
      <TodoSearch searchValue={'testSearchValue'} setSearchValue={() => {}} loading={false} ></TodoSearch>
    );
    screen.debug()
    expect(screen.getByTestId("searchIcon"))


  })
});
  