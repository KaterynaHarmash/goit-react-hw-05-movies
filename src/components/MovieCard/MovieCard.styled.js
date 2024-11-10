import styled from 'styled-components';
export const MovieCardItem = styled.li`
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 315px;
  margin: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: stratch;
  &:hover,
  &:focus {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  }
`;
export const MovieCardHeader = styled.div`
  height: 450px;
  overflow: hidden;

  & img {
    padding: 0;
    margin: 0;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const MovieCardContent = styled.div`
  padding: 18px 18px 24px 18px;
  margin: 0;
`;
export const MovieCardInfo = styled.div`
  display: table;
  width: 100%;
`;
export const MovieCardTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  display: table-cell;
`;
export const MovieCardDetailes = styled.div`
  display: table-cell;
  text-transform: uppercase;
  text-align: center;
  &:first-of-type {
    text-align: left;
  }
  &:last-of-type {
    text-align: right;
  }
`;
export const MovieCardDetailesTitle = styled.h4`
  display: block;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5em;
  font-size: 9px;
`;
export const MovieCardDetailesText = styled.span`
  font-weight: 700;
  font-size: 11px;
`;
