import { Controller, Get, Param } from '@nestjs/common';
import { OpenFoodFactsService } from './open-food-facts.service';

@Controller('open-food-facts')
export class OpenFoodFactsController {
  constructor(private readonly openFoodFactsService: OpenFoodFactsService) {}

  @Get('brands')
  getBrands() {
    return this.openFoodFactsService.getBrands();
  }

  @Get('product/:id')
  getProduct(@Param('id') id: string) {
    return this.openFoodFactsService.getProduct(+id);
  }

  @Get('brand/:id')
  getBrand(@Param('id') id: string) {
    return this.openFoodFactsService.getBrand(id);
  }

  @Get('languages')
  getLanguages() {
    return this.openFoodFactsService.getLanguages();
  }

  @Get('labels')
  getLabels() {
    return this.openFoodFactsService.getLabels();
  }

  @Get('additives')
  getAdditives() {
    return this.openFoodFactsService.getAdditives();
  }

  @Get('allergens')
  getAllergens() {
    return this.openFoodFactsService.getAllergens();
  }

  @Get('categories')
  getCategories() {
    return this.openFoodFactsService.getCategories();
  }

  @Get('countries')
  getCountries() {
    return this.openFoodFactsService.getCountries();
  }

  @Get('entry-dates')
  getEntryDates() {
    return this.openFoodFactsService.getEntryDates();
  }

  @Get('ingredients')
  getIngredients() {
    return this.openFoodFactsService.getIngredients();
  }

  @Get('packaging')
  getPackagings() {
    return this.openFoodFactsService.getPackagings();
  }

  @Get('packager-codes')
  getPacakgingCodes() {
    return this.openFoodFactsService.getPacakgingCodes();
  }

  @Get('purchase-places')
  getPurchasePlaces() {
    return this.openFoodFactsService.getPurchasePlaces();
  }

  @Get('states')
  getStates() {
    return this.openFoodFactsService.getStates();
  }

  @Get('stores')
  getStores() {
    return this.openFoodFactsService.getStores();
  }

  @Get('code/:id')
  getProductsByBarcodeBeginning(@Param('id') id: string) {
    return this.openFoodFactsService.getProductsByBarcodeBeginning(id);
  }
}
