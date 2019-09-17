const PATH = {
  product: '/products/',
  linklist: '/pages/linklists/',
};

const TEMPLATE_PARAM = {
  product: '?view=json',
  linklist: '?view=linklist-json',
};

export class JSONTemplateService {
  constructor() {}

  getJSON(type, handle) {
    const url = PATH[type] + handle + TEMPLATE_PARAM[type];
    return fetch(url).then((res) => res.json());
  }

  getProduct(handle) {
    return this.getJSON('product', handle);
  }

  getLinklist(handle) {
    return this.getJSON('linklist', handle);
  }
}
