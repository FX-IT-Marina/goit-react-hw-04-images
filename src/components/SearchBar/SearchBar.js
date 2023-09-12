import PropTypes from 'prop-types';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Wrapper } from './SearchBar.styled';

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
