import { expect } from 'chai';
const request = require('request');
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react'
import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";
import Searchbar from '../client/src/Components/Searchbar';
import Enzyme from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiJestSnapshot);

describe('SearchBar', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Searchbar initialValue="Mock Value"
                criteria="Mock Criteria"
                getResults="Mock Value"
                search="Mock Value" />
        );
        expect(shallowToJson(output)).matchSnapshot();
    });
});

// unit tests and suits

describe('Server Status', function () {

    describe('Main page', function () {
        it('status', function (done) {
            request('http://localhost:3001/', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function (done) {
            request('http://localhost:3001/', function (error, response, body) {
                expect(body).to.equal('Hello World!');
                done();
            });
        });
    });

});



