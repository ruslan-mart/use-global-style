import { validateSelector } from '../../src/utils/validateSelector';

test('Check simple selectors', () => {
  expect(validateSelector('div')).toBeTruthy();
  expect(validateSelector('span')).toBeTruthy();
  expect(validateSelector('.test')).toBeTruthy();
  expect(validateSelector('#test')).toBeTruthy();
  expect(validateSelector('[title]')).toBeTruthy();
  expect(validateSelector('[title="test"]')).toBeTruthy();
  expect(validateSelector('[title^="test"]')).toBeTruthy();
  expect(validateSelector('[title~="test"]')).toBeTruthy();
  expect(validateSelector('[title$="test"]')).toBeTruthy();
  expect(validateSelector('[title*="test"]')).toBeTruthy();
  expect(validateSelector('[title|="test"]')).toBeTruthy();
  expect(validateSelector('div[class="test"]')).toBeTruthy();
  expect(validateSelector('*')).toBeTruthy();
  expect(validateSelector(':root')).toBeTruthy();
});

test('Check multiple selectors', () => {
  expect(validateSelector('div, span')).toBeTruthy();
  expect(validateSelector('.header, .footer')).toBeTruthy();
  expect(validateSelector('#test, #js-test')).toBeTruthy();
  expect(validateSelector('[title="a"], [title^="b"], [title~="c"], [title$="d"]')).toBeTruthy();
  expect(validateSelector('div[class="test"], span[id="test"]')).toBeTruthy();
  expect(validateSelector(':root, body')).toBeTruthy();
});

test('Check nested selectors', () => {
  expect(validateSelector('div > span')).toBeTruthy();
  expect(validateSelector('h1 small, h2 small')).toBeTruthy();
  expect(validateSelector('.test + div')).toBeTruthy();
  expect(validateSelector('.test ~ span')).toBeTruthy();
  expect(validateSelector('div[class="test"] ~ *')).toBeTruthy();
});

test('Check pseudo classes and pseudo elements', () => {
  expect(validateSelector('div::after')).toBeTruthy();
  expect(validateSelector('div::before')).toBeTruthy();
  expect(validateSelector('.test:hover')).toBeTruthy();
  expect(validateSelector('a:active, button:focus')).toBeTruthy();
  expect(validateSelector('div[class="test"] ~ *')).toBeTruthy();
  expect(validateSelector('div:nth-child(2n)')).toBeTruthy();
  expect(validateSelector('div:nth-child(2n)')).toBeTruthy();
});

test('Check invalid selectors', () => {
  expect(validateSelector('..test')).toBeFalsy();
  expect(validateSelector('##test')).toBeFalsy();
  expect(validateSelector('@test')).toBeFalsy();
  expect(validateSelector('div < span')).toBeFalsy();
  expect(validateSelector('div ^ span')).toBeFalsy();
  expect(validateSelector('!test')).toBeFalsy();
  expect(validateSelector('div[class!="test"]')).toBeFalsy();
  expect(validateSelector('div::after(10)')).toBeFalsy();
  expect(validateSelector('div:not(> span)')).toBeFalsy();
});
