import { useSearchParams } from 'react-router-dom';
import { SearchInput, Searchbar, StyledForm, Submit } from './Searchbar.styled';
import { Formik } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  const [initialQuery, setInitialQuery] = useSearchParams();
  console.log(initialQuery);
  return (
    <Searchbar>
      <Formik
        initialValues={{
          query: initialQuery.get('q') || '',
        }}
        onSubmit={values => {
          onSubmit(values.query);
        }}
      >
        <StyledForm>
          <Submit type="submit">
            <span>Search</span>
          </Submit>
          <SearchInput
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </StyledForm>
      </Formik>
    </Searchbar>
  );
};
