jest.mock('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from '../src/pages/List';

describe('List', () => {
    it('renders three repo links', () => {
        const rendered = renderer.create(
            <List />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});