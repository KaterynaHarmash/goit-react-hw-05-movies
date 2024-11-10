import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  max-width: fit-content;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-color: #e74c3c;
    color: #e74c3c;
  }
`;
