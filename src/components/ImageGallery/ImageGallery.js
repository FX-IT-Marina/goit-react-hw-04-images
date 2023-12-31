import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { fetchImages } from 'services/pixabayApi';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { List, Message, ErrorWrapper, Span } from './ImageGallery.styled';

export function ImageGallery({ imageName }) {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [imageName]);

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setStatus('pending');

    fetchImages(imageName, page)
      .then(images => {
        if (images.total === 0) {
          setPage(1);
          setStatus('rejected');

          return;
        }

        if (page === 1) {
          setImages(images.hits);
          setStatus('resolved');

          return;
        }

        setImages(state => [...state, ...images.hits]);
        setStatus('resolved');

        window.scrollTo({
          top: window.scrollY + 200,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setPage(1);
        setStatus('rejected');
      });
  }, [imageName, page]);

  useEffect(() => {
    if (page > 1) {
      window.scrollTo({
        top: window.scrollY + 600,
        behavior: 'smooth',
      });
    }
  }, [images, page]);

  const handleClick = e => {
    setId(Number(e.currentTarget.id));
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const loadMoreHandler = () => {
    setPage(state => state + 1);
  };

  const compareHandle = () => {
    const image = images.find(hit => hit.id === Number(id));
    return image.largeImageURL;
  };

  if (status === 'resolved' || page > 1) {
    return (
      <div>
        <List>
          {images &&
            images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  image={image}
                  onClick={handleClick}
                />
              );
            })}
        </List>
        {status === 'pending' && <Loader />}
        {images.length % 12 === 0 && <Button onClick={loadMoreHandler} />}
        {showModal && <Modal onClose={toggleModal} image={compareHandle} />}
      </div>
    );
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return (
      <ErrorWrapper role="alert">
        <Message>
          There are no images like a <Span>{imageName}</Span>
        </Message>
      </ErrorWrapper>
    );
  }
}

ImageGallery.propTypes = {
  onSubmit: PropTypes.func,
  imageName: PropTypes.string.isRequired,
};
