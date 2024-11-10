import { StyledMovieCardsList } from './MovieCardsList.styled';
import React from 'react';

export const MovieCardsList = ({children}) => {
  return <StyledMovieCardsList>{children}</StyledMovieCardsList>;
};
