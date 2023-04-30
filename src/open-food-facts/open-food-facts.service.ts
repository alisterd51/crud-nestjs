import { Injectable } from '@nestjs/common';
import { openFoodFactsDefaultOptions } from './constants';
import { AxiosCacheInstance, setupCache } from 'axios-cache-interceptor';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class OpenFoodFactsService {
  private options = openFoodFactsDefaultOptions;
  private URL = `https://${this.options.country}.openfoodfacts.org`
  private axios: AxiosCacheInstance;

  constructor() {
    this.axios = setupCache(axios);
  }

  async getBrands() {
    return this.axios.get(`${this.URL}/brands.json`).then((brands) => {
      return brands.data;
    });
  }

  getProduct(barcode: number) {
    return this.axios.get(`${this.URL}/api/2/product/${barcode}.json`).then((product) => {
      return product.data;
    });
  }

  getBrand(brandName: string) {
    return this.axios.get(`${this.URL}/brand/${brandName}.json`).then((brands) => {
      return brands.data;
    });
  }

  getLanguages() {
    return this.axios.get(`${this.URL}/languages.json`).then((languages) => {
      return languages.data;
    });
  }

  getLabels() {
    return this.axios.get(`${this.URL}}/labels.json`).then((labels) => {
      return labels.data;
    });
  }

  getAdditives() {
    return this.axios.get(`${this.URL}/additives.json`).then((additives) => {
      return additives.data;
    });
  }

  getAllergens() {
    return this.axios.get(`${this.URL}/allergens.json`).then((allergens) => {
      return allergens.data;
    });
  }

  getCategories() {
    return this.axios.get(`${this.URL}/categories.json`).then((categories) => {
      return categories.data;
    });
  }

  getCountries() {
    return this.axios.get(`${this.URL}/countries.json`).then((countries) => {
      return countries.data;
    });
  }

  getEntryDates() {
    return this.axios.get(`${this.URL}/entry-dates.json`).then((entry_dates) => {
      return entry_dates.data;
    });
  }

  getIngredients() {
    return this.axios.get(`${this.URL}/ingredients.json`).then((ingredients) => {
      return ingredients.data;
    });
  }

  getPackagings() {
    return this.axios.get(`${this.URL}/packaging.json`).then((packaging) => {
      return packaging.data;
    });
  }

  getPacakgingCodes() {
    return this.axios.get(`${this.URL}/packager-codes.json`).then((packager_codes) => {
      return packager_codes.data;
    });
  }

  getPurchasePlaces() {
    return this.axios.get(`${this.URL}/purchase-places.json`).then((purchase_places) => {
      return purchase_places.data;
    });
  }

  getStates() {
    return this.axios.get(`${this.URL}/states.json`).then((states) => {
      return states.data;
    });
  }

  getStores() {
    return this.axios.get(`${this.URL}/stores.json`).then((stores) => {
      return stores.data;
    });
  }

  getProductsByBarcodeBeginning(beginning: string) {
    const fill = 'x'.repeat(13 - beginning.length);
    const barcode = beginning.concat(fill);
    return this.axios.get(`${this.URL}/code/${barcode}.json`).then((products) => {
      return products.data;
    });
  }
}
