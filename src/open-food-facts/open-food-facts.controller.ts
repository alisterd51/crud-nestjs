import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OpenFoodFactsService } from './open-food-facts.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('open-food-facts')
@ApiTags('open-food-facts')
export class OpenFoodFactsController {
  constructor(private readonly openFoodFactsService: OpenFoodFactsService) {}

  @Get('brands')
  @ApiOperation({ summary: 'Returns all brands' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getBrands() {
    return this.openFoodFactsService.getBrands();
  }

  @Get('product/:barcode')
  @ApiOperation({ summary: 'Get product by barcode' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getProduct(@Param('barcode', new ParseIntPipe()) barcode: number) {
    return this.openFoodFactsService.getProduct(barcode);
  }

  @Get('brand/:brandName')
  @ApiOperation({ summary: 'Get all details of a specific brand' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getBrand(@Param('brandName') brandName: string) {
    return this.openFoodFactsService.getBrand(brandName);
  }

  @Get('languages')
  @ApiOperation({ summary: 'Get all languages on the labels' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getLanguages() {
    return this.openFoodFactsService.getLanguages();
  }

  @Get('labels')
  @ApiOperation({ summary: 'Get all Labels from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getLabels() {
    return this.openFoodFactsService.getLabels();
  }

  @Get('additives')
  @ApiOperation({ summary: 'Get all additives from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getAdditives() {
    return this.openFoodFactsService.getAdditives();
  }

  @Get('allergens')
  @ApiOperation({ summary: 'Get all allergens from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getAllergens() {
    return this.openFoodFactsService.getAllergens();
  }

  @Get('categories')
  @ApiOperation({ summary: 'Get all categories from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getCategories() {
    return this.openFoodFactsService.getCategories();
  }

  @Get('countries')
  @ApiOperation({ summary: 'Get all countries from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getCountries() {
    return this.openFoodFactsService.getCountries();
  }

  @Get('entry-dates')
  @ApiOperation({ summary: 'Get all entry dates from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getEntryDates() {
    return this.openFoodFactsService.getEntryDates();
  }

  @Get('ingredients')
  @ApiOperation({ summary: 'Get all ingredients from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getIngredients() {
    return this.openFoodFactsService.getIngredients();
  }

  @Get('packaging')
  @ApiOperation({ summary: 'Get all packagings from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getPackagings() {
    return this.openFoodFactsService.getPackagings();
  }

  @Get('packager-codes')
  @ApiOperation({ summary: 'Get packaging codes from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getPacakgingCodes() {
    return this.openFoodFactsService.getPacakgingCodes();
  }

  @Get('purchase-places')
  @ApiOperation({ summary: 'Get all purchase places from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getPurchasePlaces() {
    return this.openFoodFactsService.getPurchasePlaces();
  }

  @Get('states')
  @ApiOperation({ summary: 'Get all states from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getStates() {
    return this.openFoodFactsService.getStates();
  }

  @Get('stores')
  @ApiOperation({ summary: 'Get all stores from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getStores() {
    return this.openFoodFactsService.getStores();
  }

  @Get('traces')
  @ApiOperation({ summary: 'Get all trace types from the API' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getTraces() {
    return this.openFoodFactsService.getTraces();
  }

  @Get('code/:beginning')
  @ApiOperation({
    summary: 'Get all products beginning with the given barcode string',
  })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  getProductsByBarcodeBeginning(@Param('beginning') beginning: string) {
    return this.openFoodFactsService.getProductsByBarcodeBeginning(beginning);
  }
}
