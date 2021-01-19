import axios from 'axios';
const apiKey = '19486649-5319d4f4ef24cda1042915b3a';
const fetchPhotos = (query, page) => {
  return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`);
};
export default fetchPhotos;
