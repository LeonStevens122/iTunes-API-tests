import { expect } from 'chai';
const request = require('request');
import Adapter from 'enzyme-adapter-react-16';
import { RefundedEmd } from './RefundedEmd';
import { configure, shallow } from 'enzyme';
const Searchbar = require('../client/components/searchbar.jsx');
import React from 'react';

import fetch from "isomorphic-fetch";
/* eslint-disable no-console */
/* eslint-disable no-debugger */

import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";
import renderer from "react-test-renderer";

import Link from "./Link";

configure({ adapter: new Adapter() });



it('renders correctly', () => {
    const tree = renderer
        .create(<Searchbar />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});



beforeEach(function () {
    chaiJestSnapshot.configureUsingMochaContext(this);
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
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

    describe('About page', function () {
        it('status', function (done) {
            request('http://localhost:3001/about', function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});

describe("React Search ", function () {
    it("renders correctly", () => {
        const tree = renderer.create(
            <Link page="./client.components/SearchBar.jsx">Facebook</Link>
        ).toJSON();
        expect(tree).to.matchSnapshot();
    });
});


