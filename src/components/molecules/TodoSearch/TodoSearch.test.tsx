import { describe, it, expect  } from 'vitest';
import {
    render, screen
  } from '@testing-library/react';
import { TodoSearch } from './TodoSearch';

  
  // const setup = () =>
  //   render(
  //     <TodoSearch searchValue={'testSearchValue'} setSearchValue={() => {}} loading={false} ></TodoSearch>
  //   );
  
  // describe('<Rates Report Table/> Render', () => {
  //   test('Should render component', async () => {
  //     setup();
  //   });
  // });
  
describe('<Search component/> UI Testing', () => {
  // beforeEach(() => setup());
  it('render', () => {
    render(
      <TodoSearch searchValue={'testSearchValue'} setSearchValue={() => {}} loading={false} ></TodoSearch>
    );
    screen.debug()
    expect(screen.getByTestId("searchIcon"))


  })
  // // afterEach(() => {
  // //   jest.clearAllMocks();
  // //   cleanup();
  // // });
  // test('Verify if it has search icon', async () => {
  //   expect(await screen.findByRole('searchIcon')).toBeVisible();

  // });
});
  