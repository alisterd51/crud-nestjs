import { Injectable } from '@nestjs/common';
import { openFoodFactsDefaultOptions } from './constants';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class OpenFoodFactsService {
  private options = openFoodFactsDefaultOptions;
  private URL = `https://${this.options.country}.openfoodfacts.org`

  constructor(private readonly httpService: HttpService) {}

  getBrands() {
    return this.httpService.get(`${this.URL}/brands.json`)
    .pipe(
      map((brands) => brands.data)
    );
  }

  getProduct(barcode: number) {
    return this.httpService.get(`${this.URL}/api/2/product/${barcode}.json`)
    .pipe(
      map((product) => product.data)
    );
  }

  getBrand(brandName: string) {
    return this.httpService.get(`${this.URL}/brand/${brandName}.json`)
    .pipe(
      map((brand) => brand.data)
    );
  }

  getLanguages() {
    return this.httpService.get(`${this.URL}/languages.json`)
    .pipe(
      map((brand) => brand.data)
    );
  }

  getLabels() {
    return this.httpService.get(`${this.URL}}/labels.json`)
    .pipe(
      map((brand) => brand.data)
    );
  }

  getAdditives() {
    return this.httpService.get(`${this.URL}/additives.json`)
    .pipe(
      map((additives) => additives.data)
    );
  }

  getAllergens() {
    return this.httpService.get(`${this.URL}/allergens.json`)
    .pipe(
      map((allergens) => allergens.data)
    );
  }

  getCategories() {
    return this.httpService.get(`${this.URL}/categories.json`)
    .pipe(
      map((categories) => categories.data)
    );
  }

  getCountries() {
    return this.httpService.get(`${this.URL}/countries.json`)
    .pipe(
      map((countries) => countries.data)
    );
  }

  getEntryDates() {
    return this.httpService.get(`${this.URL}/entry-dates.json`)
    .pipe(
      map((entry_dates) => entry_dates.data)
    );
  }

  getIngredients() {
    return this.httpService.get(`${this.URL}/ingredients.json`)
    .pipe(
      map((ingredients) => ingredients.data)
    );
  }

  getPackagings() {
    return this.httpService.get(`${this.URL}/packaging.json`)
    .pipe(
      map((packagings) => packagings.data)
    );
  }

  getPacakgingCodes() {
    return this.httpService.get(`${this.URL}/packager-codes.json`)
    .pipe(
      map((packaging_codes) => packaging_codes.data)
    );
  }

  getPurchasePlaces() {
    return this.httpService.get(`${this.URL}/purchase-places.json`)
    .pipe(
      map((purchase_places) => purchase_places.data)
    );
  }

  getStates() {
    return this.httpService.get(`${this.URL}/states.json`)
    .pipe(
      map((states) => states.data)
    );
  }

  getStores() {
    return this.httpService.get(`${this.URL}/stores.json`)
    .pipe(
      map((stores) => stores.data)
    );
  }

  getProductsByBarcodeBeginning(beginning: string) {
    const fill = 'x'.repeat(13 - beginning.length);
    const barcode = beginning.concat(fill);
    return this.httpService.get(`${this.URL}/code/${barcode}.json`)
    .pipe(
      map((products) => products.data)
    );
  }
}
