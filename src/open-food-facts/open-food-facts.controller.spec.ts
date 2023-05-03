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
    it('get brands', () => {
      expect(controller.getBrands()).toBeDefined();
    });
    it('get product', () => {
      expect(controller.getProduct(1234567890123)).toBeDefined();
    });
    it('get brand', () => {
      expect(controller.getBrand('marie')).toBeDefined();
    });
    it('get labels', () => {
      expect(controller.getLabels()).toBeDefined();
    });
    it('get allergens', () => {
      expect(controller.getAllergens()).toBeDefined();
    });
    it('get categories', () => {
      expect(controller.getCategories()).toBeDefined();
    });
    it('get entry dates', () => {
      expect(controller.getEntryDates()).toBeDefined();
    });
    it('get ingredients', () => {
      expect(controller.getIngredients()).toBeDefined();
    });
    it('get packagings', () => {
      expect(controller.getPackagings()).toBeDefined();
    });
    it('get pacakging codes', () => {
      expect(controller.getPacakgingCodes()).toBeDefined();
    });
    it('get purchase places', () => {
      expect(controller.getPurchasePlaces()).toBeDefined();
    });
    it('get states', () => {
      expect(controller.getStates()).toBeDefined();
    });
    it('get stores', () => {
      expect(controller.getStores()).toBeDefined();
    });
    it('get traces', () => {
      expect(controller.getTraces()).toBeDefined();
    });
    it('get products by barcode beginning', () => {
      expect(controller.getProductsByBarcodeBeginning('12345')).toBeDefined();
    });
  });
});
