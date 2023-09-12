import PropTypes from 'prop-types';
import { ButtonMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return <ButtonMore onClick={onClick}>Load more</ButtonMore>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
