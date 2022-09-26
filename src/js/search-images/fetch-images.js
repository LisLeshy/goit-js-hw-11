import axios from 'axios';

export default async function fetchImages(value, page) {
  // https://pixabay.com/api/?key=30103705-be42ac45167c9dd0b6d899882&q=yellow+flowers&image_type=photo
  // https://pixabay.com/api/?key=30103705-be42ac45167c9dd0b6d899882&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}

  const url =
    'https://pixabay.com/api/?key=30103705-be42ac45167c9dd0b6d899882&';
  const filter = `q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  return await axios.get(`${url}${filter}`).then(response => response.data);
}
// console.log(fetchImages);
