jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Detail = require('../src/pages/Detail').default;

describe('Detail', () => {
    it('starts with zero commits', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        expect(rendered.state.commits.length).toEqual(0);
    });
    
    it('shows commits by default', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        expect(rendered.state.mode).toEqual('commits');
    });

    it('shows forks when the button is taped', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        const forksButton = rendered.forks;
        TestUtils.Simulate.click(forksButton);
        expect(rendered.state.mode).toEqual('forks');
    });

    it('fetches forks from a local source', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: ''}} />
        );

        const testData = require('./forks.json');
        rendered.saveFeed('forks', testData);
        rendered.selectMode('forks');

        const forks = TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'github');
        expect(forks.length).toEqual(30);
    });

    describe('Asynchronous Test', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{repo: 'react'}} />
        );

        beforeEach((done) => {
            setTimeout(() => {
                if (rendered.state.forks.length > 0) {
                    done();
                }
            }, 3000);
        });

        it('fetches forks from Github', (done) => {
            expect(rendered.state.forks.length).toEqual(30);
            done();
        });
    });
});