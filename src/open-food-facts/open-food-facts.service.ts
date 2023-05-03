import { Injectable } from '@nestjs/common';
import { openFoodFactsDefaultOptions } from './constants';
import { AxiosCacheInstance, setupCache } from 'axios-cache-interceptor';
import axios from 'axios';

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

  async getProduct(barcode: number) {
    const product = await this.axios.get(`${this.URL}/api/2/product/${barcode}.json`);
    return product.data;
  }

  async getBrand(brandName: string) {
    const brands = await this.axios.get(`${this.URL}/brand/${brandName}.json`);
    return brands.data;
  }

  async getLanguages() {
    const languages = await this.axios.get(`${this.URL}/languages.json`);
    return languages.data;
  }

  async getLabels() {
    const labels = await this.axios.get(`${this.URL}/labels.json`);
    return labels.data;
  }

  async getAdditives() {
    const additives = await this.axios.get(`${this.URL}/additives.json`);
    return additives.data;
  }

  async getAllergens() {
    const allergens = await this.axios.get(`${this.URL}/allergens.json`);
    return allergens.data;
  }

  async getCategories() {
    const categories = await this.axios.get(`${this.URL}/categories.json`);
    return categories.data;
  }

  async getCountries() {
    const countries = await this.axios.get(`${this.URL}/countries.json`);
    return countries.data;
  }

  async getEntryDates() {
    const entry_dates = await this.axios.get(`${this.URL}/entry-dates.json`);
    return entry_dates.data;
  }

  async getIngredients() {
    const ingredients = await this.axios.get(`${this.URL}/ingredients.json`);
    return ingredients.data;
  }

  async getPackagings() {
    const packaging = await this.axios.get(`${this.URL}/packaging.json`);
    return packaging.data;
  }

  async getPacakgingCodes() {
    const packager_codes = await this.axios.get(`${this.URL}/packager-codes.json`);
    return packager_codes.data;
  }

  async getPurchasePlaces() {
    const purchase_places = await this.axios.get(`${this.URL}/purchase-places.json`);
    return purchase_places.data;
  }

  async getStates() {
    const states = await this.axios.get(`${this.URL}/states.json`);
    return states.data;
  }

  async getStores() {
    const stores = await this.axios.get(`${this.URL}/stores.json`);
    return stores.data;
  }

  async getTraces() {
    const stores = await this.axios.get(`${this.URL}/traces.json`);
    return stores.data;
  }

  async getProductsByBarcodeBeginning(beginning: string) {
    const fill = 'x'.repeat(13 - beginning.length);
    const barcode = beginning.concat(fill);
    const products = await this.axios.get(`${this.URL}/code/${barcode}.json`);
    return products.data;
  }
}
