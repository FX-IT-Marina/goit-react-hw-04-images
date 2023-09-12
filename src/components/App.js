import { useState } from 'react';
import { Searchbar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';

export function App() {
  const [name, setName] = useState('');

  return (
    <AppWrapper>
      <Searchbar onSubmit={setName} />
      <ImageGallery imageName={name} />
    </AppWrapper>
  );
}
