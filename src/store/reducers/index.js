import login from 'src/store/reducers/auth';
import requests from 'src/store/reducers/requests';

export default {
  ...login,
  ...requests,
};
