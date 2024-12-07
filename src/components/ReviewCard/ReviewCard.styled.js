import styled from 'styled-components';

export const ReviewStyledCard = styled.li`
  padding: 20px;
  background: #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ReviewAuthor = styled.p`
  font-weight: 700;
`;

export const ReviewContent = styled.p`
  font-size: 14px;
`;
export const ReviewLink = styled.a`
  display: block;
  padding: 8px 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  max-width: fit-content;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  background: #e74c3c;
  margin-top: 20px;
`;
