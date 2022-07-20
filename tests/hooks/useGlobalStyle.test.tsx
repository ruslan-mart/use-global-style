import React from 'react';
import { render } from '@testing-library/react';

import { useGlobalStyle } from '../../src';

test('Check styles', () => {
  const Component = () => {
    useGlobalStyle('div', {
      color: 'red',
    });

    useGlobalStyle('body', {
      margin: '20px',
    });

    return <div>some text</div>;
  };

  const renderResult = render(<Component />);

  const element = renderResult.getByText('some text');
  const body = element.closest('body')!;

  expect(window.getComputedStyle(element).color).toBe('red');
  expect(window.getComputedStyle(body).margin).toBe('20px');

  renderResult.unmount();

  expect(window.getComputedStyle(element).color).not.toBe('red');
  expect(window.getComputedStyle(body).margin).not.toBe('20px');
});

test('Check styles with enabled option as false', () => {
  const Component = () => {
    useGlobalStyle(
      'div',
      {
        color: 'red',
      },
      {
        enabled: false,
      }
    );

    return <div>some text</div>;
  };

  const renderResult = render(<Component />);

  const element = renderResult.getByText('some text');

  expect(window.getComputedStyle(element).color).not.toBe('red');

  renderResult.unmount();

  expect(window.getComputedStyle(element).color).not.toBe('red');
});
