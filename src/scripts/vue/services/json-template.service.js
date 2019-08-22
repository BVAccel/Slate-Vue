const $http = require('axios');

const menuTemplateParam = '?view=menu-json';
const menuDomain = '/pages/menus/';

export class JSONTemplateService {
  constructor() {}

  getMenu(handle) {
    const url = `${menuDomain}${handle}${menuTemplateParam}`;
    return $http.get(url);
  }
}
