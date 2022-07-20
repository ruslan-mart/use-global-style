import { camelToKebabCase } from '../../src/utils/camelToKebabCase';

test('Check style props', () => {
  expect(camelToKebabCase('backgroundColor')).toBe('background-color');
  expect(camelToKebabCase('borderTopRightRadius')).toBe('border-top-right-radius');
  expect(camelToKebabCase('color')).toBe('color');
  expect(camelToKebabCase('fontFamily')).toBe('font-family');
  expect(camelToKebabCase('zIndex')).toBe('z-index');
});

test('Check style props with browser prefix', () => {
  expect(camelToKebabCase('WebkitLineClamp')).toBe('-webkit-line-clamp');
  expect(camelToKebabCase('WebkitTransform')).toBe('-webkit-transform');
  expect(camelToKebabCase('WebkitUserSelect')).toBe('-webkit-user-select');
});
