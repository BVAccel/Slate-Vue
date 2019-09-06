const $http = require('axios');

const DOMAIN = {
  product: '/products/',
  menu: '/pages/menus/',
};

const TEMPLATE_PARAM = {
  product: '?view=json',
  menu: '?view=menu-json',
};

export class JSONTemplateService {
  constructor() {}

  getJSON(type, handle) {
    const url = `${DOMAIN[type]}${handle}${TEMPLATE_PARAM[type]}`;
    return $http.get(url).then((res) => res.data);
  }

  getProduct(handle) {
    return this.getJSON('product', handle);
  }

  getMenu(handle) {
    return this.getJSON('menu', handle);
  }
}
