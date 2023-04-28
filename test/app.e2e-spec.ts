import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
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

    it('create user', async () => {
      return request(app.getHttpServer())
        .post('/users')
        .send({ login: 'john', password: 'changeme'})
        .expect(201);
    })

    it('find one user', async () => {
      const response = request(app.getHttpServer())
        .post('/users')
        .send({ login: 'snow', password: 'changeme'})
        .expect(201);

      const id = (await response).body.id
      return request(app.getHttpServer())
        .get('/users/' + id)
        .expect(200);
    })

    it('update one user', async () => {
      const response = request(app.getHttpServer())
        .post('/users')
        .send({ login: 'targaryen', password: 'changeme'})
        .expect(201);

      const id = (await response).body.id
      return request(app.getHttpServer())
        .patch('/users/' + id)
        .send({ login: 'aegon' })
        .expect(200);
    })

    it('remove one user', async () => {
      const response = request(app.getHttpServer())
        .post('/users')
        .send({ login: 'stark', password: 'changeme'})
        .expect(201);

      const id = (await response).body.id
      return request(app.getHttpServer())
        .delete('/users/' + id)
        .expect(200);
    })
  })

  describe('AuthController', () => {})

  describe('OpenfoodfactsController', () => {})
});
