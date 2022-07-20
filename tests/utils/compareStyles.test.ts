import { compareStyles } from '../../src/utils/compareStyles';

test('Check for compliance', () => {
  expect(compareStyles({}, {})).toBeTruthy();

  expect(
    compareStyles(
      {
        color: '#FF0000',
      },
      {
        color: '#FF0000',
      }
    )
  ).toBeTruthy();

  expect(
    compareStyles(
      {
        backgroundColor: 'transparent',
        fontSize: '16px',
        padding: '24px 32px',
        position: 'absolute',
        zIndex: '1',
      },
      {
        backgroundColor: 'transparent',
        fontSize: '16px',
        padding: '24px 32px',
        position: 'absolute',
        zIndex: '1',
      }
    )
  );

  expect(
    compareStyles(
      {
        WebkitLineClamp: '2',
        WebkitUserSelect: 'none',
      },
      {
        WebkitLineClamp: '2',
        WebkitUserSelect: 'none',
      }
    )
  );
});

test('Check for compliance with reference object', () => {
  const styles = {
    backgroundAttachment: 'fixed',
    lineHeight: '1.5',
    whiteSpacing: 'nowrap',
  };

  expect(compareStyles(styles, styles)).toBeTruthy();
});

test('Check for mismatch', () => {
  expect(compareStyles({}, { color: 'blue' })).toBeFalsy();
  expect(compareStyles({ color: 'blue' }, {})).toBeFalsy();
  expect(
    compareStyles({ backgroundColor: 'green', borderRadius: '12px' }, { backgroundColor: 'green' })
  ).toBeFalsy();
  expect(
    compareStyles({ borderRadius: '12px' }, { backgroundColor: 'green', borderRadius: '12px' })
  ).toBeFalsy();
  expect(
    compareStyles({ height: '32px', width: '24px' }, { height: '24px', width: '24px' })
  ).toBeFalsy();
  expect(
    compareStyles(
      { boxSizing: 'border-box', height: '32px', width: '24px' },
      { height: '32px', width: '24px' }
    )
  ).toBeFalsy();
  expect(compareStyles({ margin: 'auto' }, { margin: 'auto !important' })).toBeFalsy();
  expect(compareStyles({ outlineColor: 'red' }, { outlineColor: 'var(--red)' })).toBeFalsy();
  expect(compareStyles({ WebkitUserSelect: 'none' }, { userSelect: 'none' })).toBeFalsy();
});
