import { stylesToCSSText } from '../../src/utils/stylesToCSSText';

test('Check style props', () => {
  expect(stylesToCSSText('div', { color: 'red' }, false)).toBe('div{color:red}');
  expect(stylesToCSSText('div', { color: 'red!important' }, false)).toBe(
    'div{color:red!important}'
  );
  expect(stylesToCSSText('div', { color: 'red', marginTop: '8px' }, false)).toBe(
    'div{color:red;margin-top:8px}'
  );
  expect(stylesToCSSText('div', { position: 'fixed', zIndex: '100' }, false)).toBe(
    'div{position:fixed;z-index:100}'
  );
  expect(stylesToCSSText('div, span', { boxSizing: 'border-box' }, false)).toBe(
    'div, span{box-sizing:border-box}'
  );
  expect(stylesToCSSText('.test', { height: '32px', width: '24px' }, false)).toBe(
    '.test{height:32px;width:24px}'
  );
  expect(
    stylesToCSSText('.test::after, .test::before', { content: '"!"', display: 'block' }, false)
  ).toBe('.test::after, .test::before{content:"!";display:block}');
});

test('Check style props with important option', () => {
  expect(stylesToCSSText('div', { color: 'red' }, true)).toBe('div{color:red!important}');
  expect(stylesToCSSText('div', { color: 'red!important' }, true)).toBe('div{color:red!important}');
  expect(stylesToCSSText('div', { color: 'red', marginTop: '8px' }, true)).toBe(
    'div{color:red!important;margin-top:8px!important}'
  );
  expect(stylesToCSSText('div', { position: 'fixed', zIndex: '100' }, true)).toBe(
    'div{position:fixed!important;z-index:100!important}'
  );
  expect(stylesToCSSText('div, span', { boxSizing: 'border-box' }, true)).toBe(
    'div, span{box-sizing:border-box!important}'
  );
  expect(stylesToCSSText('.test', { height: '32px', width: '24px' }, true)).toBe(
    '.test{height:32px!important;width:24px!important}'
  );
});

test('Check style props with media query', () => {
  expect(stylesToCSSText('div', { color: 'red' }, false, 'all and (max-width: 640px)')).toBe(
    '@media all and (max-width: 640px){div{color:red}}'
  );
  expect(
    stylesToCSSText('div', { color: 'red', marginTop: '8px' }, false, 'all and (max-width: 640px)')
  ).toBe('@media all and (max-width: 640px){div{color:red;margin-top:8px}}');
  expect(
    stylesToCSSText(
      '.test span',
      { height: '32px', width: '24px' },
      false,
      'all and (max-width: 640px)'
    )
  ).toBe('@media all and (max-width: 640px){.test span{height:32px;width:24px}}');
});
