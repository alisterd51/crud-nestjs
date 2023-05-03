import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsController } from './open-food-facts.controller';
import { OpenFoodFactsService } from './open-food-facts.service';

describe('OpenFoodFactsController', () => {
  let controller: OpenFoodFactsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenFoodFactsController],
      providers: [OpenFoodFactsService],
    }).compile();

    controller = module.get<OpenFoodFactsController>(OpenFoodFactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it.skip('get brands', () => {
      expect(controller.getBrands()).toBeDefined();
    });
    it('get product', () => {
      expect(controller.getProduct(1234567890123)).toBeDefined();
    });
    it('get brand', () => {
      expect(controller.getBrand('marie')).toBeDefined();
    });
    it.skip('get labels', () => {
      expect(controller.getLabels()).toBeDefined();
    });
    it.skip('get allergens', () => {
      expect(controller.getAllergens()).toBeDefined();
    });
    it.skip('get categories', () => {
      expect(controller.getCategories()).toBeDefined();
    });
    it.skip('get entry dates', () => {
      expect(controller.getEntryDates()).toBeDefined();
    });
    it.skip('get ingredients', () => {
      expect(controller.getIngredients()).toBeDefined();
    });
    it.skip('get packagings', () => {
      expect(controller.getPackagings()).toBeDefined();
    });
    it.skip('get pacakging codes', () => {
      expect(controller.getPacakgingCodes()).toBeDefined();
    });
    it.skip('get purchase places', () => {
      expect(controller.getPurchasePlaces()).toBeDefined();
    });
    it.skip('get states', () => {
      expect(controller.getStates()).toBeDefined();
    });
    it.skip('get stores', () => {
      expect(controller.getStores()).toBeDefined();
    });
    it.skip('get traces', () => {
      expect(controller.getTraces()).toBeDefined();
    });
    it('get products by barcode beginning', () => {
      expect(controller.getProductsByBarcodeBeginning('12345')).toBeDefined();
    });
  });
});
