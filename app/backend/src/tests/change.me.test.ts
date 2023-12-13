import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import jwt from '../utils/jwt';
import bcrypt from '../utils/bcrypt';
import Teams from '../database/models/teamsModel';
import Users from '../database/models/usersModel';

import { Response, Request } from 'superagent';
import { mockUser, mockUserComplete, loginUser } from './mock/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test de integração', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('GET /teams', async () => {
        sinon.stub(Teams, 'findAll').returns([
            {
                id: 1,
                teamName: 'Team 1',
            },
            {
                id: 2,
                teamName: 'Team 2',
            },
        ] as any);
        const response: Response = await chai.request(app).get('/teams');
        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length(2);
        expect(response.body[0]).to.have.property('id').to.be.equal(1);
        expect(response.body[0]).to.have.property('teamName').to.be.equal('Team 1');
    });

    it('GET /teams/:id', async () => {
        sinon.stub(Teams, 'findByPk').returns({
            id: 1,
            teamName: 'Team 1',
        } as any);
        const response: Response = await chai.request(app).get('/teams/1');
        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('id').to.be.equal(1);
        expect(response.body).to.have.property('teamName').to.be.equal('Team 1');
    });

    it('GET /teams/:id - Not Found', async () => {
        sinon.stub(Teams, 'findByPk').returns(Promise.resolve(null));
        const response: Response = await chai.request(app).get('/teams/1');
        expect(response.status).to.be.equal(404);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('message').to.be.equal('Team not found');
    });

    it('POST /login', async () => {
        sinon.stub(Users, 'findOne').returns(Promise.resolve(mockUserComplete) as any);
        sinon.stub(jwt, 'generateToken').returns('token');
        sinon.stub(bcrypt, 'compare').returns(Promise.resolve(true));

        const { status, body } = await chai.request(app).post('/login').send(loginUser);

        expect(status).to.be.equal(200);
        expect(body).to.be.an('object');
        expect(body).to.have.property('token').to.be.equal('token');
    });

    it('POST /login - Invalid email or password', async () => {
        sinon.stub(Users, 'findOne').returns(Promise.resolve(null) as any);
        const { status, body } = await chai.request(app).post('/login').send(loginUser);

        expect(status).to.be.equal(401);
        expect(body).to.be.an('object');
        expect(body).to.have.property('message').to.be.equal('Invalid email or password');
    });

    it('GET /login/role', async () => {
        sinon.stub(Users, 'findOne').returns(Promise.resolve(mockUserComplete) as any);
        sinon.stub(jwt, 'verifyToken').returns(mockUser);

        const { status, body } = await chai.request(app)
            .get('/login/role')
            .set('authorization', 'Bearer token');

        expect(status).to.be.equal(200);
        expect(body).to.be.an('object');
        expect(body).to.have.property('role').to.be.equal('admin');
    });
});
