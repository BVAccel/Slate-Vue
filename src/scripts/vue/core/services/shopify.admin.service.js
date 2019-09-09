export class ShopifyAdminService {
  constructor() {}

  /**
   * Retreive settings_data.json asset.
   * @param {Number} themeId - The theme id to retreive settings for. Uses global Shopify object as fallback.
   * @return {Promise Resolve <Object>} The active set of theme settings
   */
  getThemeSettingsData(themeId) {
    return fetch(`/admin/themes/${themeId || Shopify.theme.id}/assets.json?asset[key]=config/settings_data.json`)
    .then((res) => res.json())
    .then((res) => JSON.parse(res.asset.value).current);
  }

  /**
   * Retrieve data for single section.
   * @param {String} handle - The section handle.
   * @return {Object} The section data in JSON.
   */
  getSectionData(handle) {
    return this.getThemeSettingsData().then((res) => {
      return res.sections[handle];
    });
  }

  /**
   * Retrieve data for multiple sections.
   * @param {Array.<String>} handles - The section handles.
   * @return {Object} A map of each section's handle to it's respective data.
   */
  getMultiSectionData(handles) {
    return this.getThemeSettingsData().then((res) => {
      return handles.reduce((map, handle) => {
        map[handle] = res.sections[handle];
        return map;
      }, {});
    });
  }

  /**
   * Convert a shopify image to a url. 
   * Relies on window.bvaccel.filesCDN [snippets/shop-api].
   * @param {String} url - The shopify image url, shopify protocol.
   * @return {String} The files CDN image url.
   * TODO: Add support for sizing, crop & scale img_url parameters.
   */
  imgUrl (url) {
    return url.replace('shopify://shop_images/', window.bvaccel.filesCDN);
  }
}