export function fetchImages(value, page) {
  const searchParams = new URLSearchParams({
    key: '38479916-837fee8c3dcb6d91451c3fa37',
    q: value,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  const URL = 'https://pixabay.com/api/';

  return fetch(`${URL}?${searchParams}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`There is no images like ${this.props.imageName}`)
    );
  });
}
