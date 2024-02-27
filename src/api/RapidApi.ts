import axios from 'axios';

export type Params = {
  query: String;
  page: String;
  num_pages: String;
};

export const fetchPopularJob = (params: Params) => {
  const options = {
    params: {...params},
    headers: {
      'X-RapidAPI-Key': '92aced8c94msh8bb1637d6565faep16cfc6jsne409f50c09cb',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    }
  };
  const url = 'https://jsearch.p.rapidapi.com/search';

  return axios.get(url, options).then(response => response.data.data);
};
