let APP_URL = '';
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
    APP_URL = 'http://localhost/';
}else{
    APP_URL = `${process.env.PUBLIC_URL}/`;
}

const API_PATH = 'emp-mgt-api/api/';

export  const CONFIG = {
    APP_ENDPOINT:APP_URL+API_PATH,
};