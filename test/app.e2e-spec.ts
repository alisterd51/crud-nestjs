import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('UsersController', () => {
    it('get all users',async () => {
      return request(app.getHttpServer())
        .get('/users')
        .expect(200);
    })

    let testUserCreate: request.Response;

    it('create user', async () => {
      testUserCreate = await request(app.getHttpServer())
        .post('/users')
        .send({ login: 'john', password: 'changeme'})
        .expect(201);
      return testUserCreate;
    })

    it('find one user', async () => {
      const id = testUserCreate.body.id
      return request(app.getHttpServer())
        .get('/users/' + id)
        .expect(200);
    })

    it('update one user', async () => {
      const id = testUserCreate.body.id
      return request(app.getHttpServer())
        .patch('/users/' + id)
        .send({ login: 'aegon' })
        .expect(200);
    })

    it('remove one user', async () => {
      const id = testUserCreate.body.id
      return request(app.getHttpServer())
        .delete('/users/' + id)
        .expect(200);
    })
  })

  describe('AuthController', () => {
    it('sign in', async () => {
      const responseNewUser = await request(app.getHttpServer())
        .post('/users')
        .send({ login: 'arya', password: 'changeme'})
        .expect(201);
      const responseSignIn = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ login: 'arya', password: 'changeme'})
        .expect(200);
      const id = responseNewUser.body.id
      await request(app.getHttpServer())
        .delete('/users/' + id)
        .expect(200);
      return responseSignIn;
    })

    it('profile', async () => {
      const responseNewUser = await request(app.getHttpServer())
        .post('/users')
        .send({ login: 'arya', password: 'changeme'})
        .expect(201);
      const responseSignIn = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ login: 'arya', password: 'changeme'})
        .expect(200);
      const responseProfile = await request(app.getHttpServer())
      .get('/auth/profile')
      .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
      .expect(200);
      const id = responseNewUser.body.id
      await request(app.getHttpServer())
        .delete('/users/' + id)
        .expect(200);
      return responseProfile;
    })
  })

  describe('OpenfoodfactsController', () => {
    let responseNewUser: request.Response;
    let responseSignIn: request.Response;

    it('create and signIn user', async () => {
      responseNewUser = await request(app.getHttpServer())
        .post('/users')
        .send({ login: 'arya', password: 'changeme'})
        .expect(201);
      responseSignIn = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ login: 'arya', password: 'changeme'})
        .expect(200);
    })

    it.skip('brands', async () => {
      const responseBrands = await request(app.getHttpServer())
        .get('/open-food-facts/brands')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseBrands;
    })

    it('product/:barcode', async () => {
      const responseProduct = await request(app.getHttpServer())
        .get('/open-food-facts/product/0737628064502')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseProduct;
    })

    it('brand/:brandName', async () => {
      const responseBrand = await request(app.getHttpServer())
        .get('/open-food-facts/brand/marie')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseBrand;
    })

    it.skip('languages', async () => {
      const responseLanguages = await request(app.getHttpServer())
        .get('/open-food-facts/languages')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseLanguages;
    })

    it.skip('labels', async () => {
      const responseLabels = await request(app.getHttpServer())
        .get('/open-food-facts/labels')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseLabels;
    })

    it.skip('additives', async () => {
      const responseAdditives = await request(app.getHttpServer())
        .get('/open-food-facts/additives')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseAdditives;
    })

    it.skip('allergens', async () => {
      const responseAllergens = await request(app.getHttpServer())
        .get('/open-food-facts/allergens')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseAllergens;
    })

    it.skip('categories', async () => {
      const responseCategories = await request(app.getHttpServer())
        .get('/open-food-facts/categories')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseCategories;
    })

    it.skip('countries', async () => {
      const responseCountries = await request(app.getHttpServer())
        .get('/open-food-facts/countries')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseCountries;
    })

    it.skip('entry-dates', async () => {
      const responseEntryDates = await request(app.getHttpServer())
        .get('/open-food-facts/entry-dates')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseEntryDates;
    })

    it.skip('ingredients', async () => {
      const responseIngredients = await request(app.getHttpServer())
        .get('/open-food-facts/ingredients')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseIngredients;
    })

    it.skip('packaging', async () => {
      const responsePackaging = await request(app.getHttpServer())
        .get('/open-food-facts/packaging')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responsePackaging;
    })

    it.skip('packager-codes', async () => {
      const responsePackagerCodes = await request(app.getHttpServer())
        .get('/open-food-facts/packager-codes')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responsePackagerCodes;
    })

    it.skip('purchase-places', async () => {
      const responsePurchasePlaces = await request(app.getHttpServer())
        .get('/open-food-facts/purchase-places')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responsePurchasePlaces;
    })

    it.skip('states', async () => {
      const responseStates = await request(app.getHttpServer())
        .get('/open-food-facts/states')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseStates;
    })

    it.skip('stores', async () => {
      const responseStores = await request(app.getHttpServer())
        .get('/open-food-facts/stores')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseStores;
    })

    it.skip('traces', async () => {
      const responseTraces = await request(app.getHttpServer())
        .get('/open-food-facts/traces')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseTraces;
    })

    it('code/:beginning', async () => {
      const responseCodeBeginning = await request(app.getHttpServer())
        .get('/open-food-facts/code/3596710')
        .set('Authorization', 'Bearer ' + responseSignIn.body.access_token)
        .expect(200);
      return responseCodeBeginning;
    })

    it('delete user', async () => {
      const id = responseNewUser.body.id
      await request(app.getHttpServer())
        .delete('/users/' + id)
        .expect(200);
    })
  })
});
