import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvVariables = {
  DEV_BACKEND_URL,
};

const prodEnvVariables = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
