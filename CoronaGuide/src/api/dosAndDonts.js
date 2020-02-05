import axios from 'axios';

export default axios.create({
  baseURL: 'https://raw.githubusercontent.com/levimake/CoronaGuide_App/master/data/dosanddonts',
  headers : {
  }
});
