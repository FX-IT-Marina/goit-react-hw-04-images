import { Wrapper } from './SearchBar.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Wrapper>
      <SearchForm onSubmit={onSubmit} />
    </Wrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
