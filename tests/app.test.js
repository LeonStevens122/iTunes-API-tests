const expect = require('chai').expect;
const request = require('request');
const Searchbar = require('./client/components/searchbar.jsx');
import React from 'react';


import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";

import React from "react";
import renderer from "react-test-renderer";

import Link from "./Link";


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


