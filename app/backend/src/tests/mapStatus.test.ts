import * as chai from 'chai';
import mapStatus from '../utils/httpStatus';

const { expect } = chai;

describe('Teste do mapStatus', () => {
    it('Deve retornar o status 200', () => {
        expect(mapStatus('ok')).to.be.eq(200);
    });
});