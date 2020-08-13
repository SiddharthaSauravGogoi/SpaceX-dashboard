import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/launches';

export default {
  getAllLaunches: async () => {
    const response = await axios.get(`${url}`);
    return response.data;
  },
};
