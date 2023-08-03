import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  image: { id, webformatURL, tags, onClick },
}) => {
  return (
    <Item key={id} onClick={onClick}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
