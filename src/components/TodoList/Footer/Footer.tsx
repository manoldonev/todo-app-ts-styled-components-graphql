import styled from 'styled-components/macro';
import { Actions } from '../Actions';
import { Filter } from '../Filter';
import { Pagination } from '../Pagination';

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  border-top: 0.1rem solid #ddd;
  background-color: #f4fce8;
  margin: 0 -2rem -1rem -2rem;
  padding: 0 2rem;
  color: #707070;
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <Actions />
      <Pagination />
      <Filter />
    </StyledFooter>
  );
};

export { Footer };
