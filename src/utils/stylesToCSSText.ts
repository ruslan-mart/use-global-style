import { CSSProperties } from 'react';

import { camelToKebabCase } from './camelToKebabCase';
import { validateSelector } from './validateSelector';

export const stylesToCSSText = (
  selector: string,
  styles: CSSProperties,
  importantAll: boolean,
  media?: string
) => {
  if (!validateSelector(selector)) {
    throw new DOMException(`'${selector}' is not a valid selector.`);
  }

  const rows = Object.entries(styles).map(([key, value]) => {
    let rowValue = `${camelToKebabCase(key)}:${value}`;

    if (importantAll && !rowValue.endsWith('!important')) {
      rowValue += '!important';
    }

    return rowValue;
  });

  const cssText = `${selector}{${rows.join(';')}}`;

  return media ? `@media ${media}{${cssText}}` : cssText;
};
