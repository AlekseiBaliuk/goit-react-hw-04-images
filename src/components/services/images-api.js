import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29903101-949784c6f6ed1a6d356bb42d9';

export async function fetchImages(name, page) {
  const response = await axios.get('?', {
    params: {
      key: API_KEY,
      q: name,
      page: page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });

  return response.data;
}

// export function fetchImages(name, page) {
//   return fetch(
//     `https://pixabay.com/api/?q=${name}&page=${page}&key=29903101-949784c6f6ed1a6d356bb42d9&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`No images ${name}`));
//   });
// }
