import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Radio from '..';

describe('Radio', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders default with label correctly', () => {
    const tree = renderer.create(<Radio>default</Radio>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders primary correctly', () => {
    const tree = renderer
      .create(<Radio iistyle="primary">primary</Radio>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders darken correctly', () => {
    const tree = renderer
      .create(<Radio iistyle="darken">darken</Radio>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders success correctly', () => {
    const tree = renderer
      .create(<Radio iistyle="success">success</Radio>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should work correctly with group', () => {
  // });
});
