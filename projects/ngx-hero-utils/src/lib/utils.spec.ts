import { isBlankString, isFunction, isNil, isUndefined } from './utils';

describe('isNil', () => {
  it('should return true for null values', () => {
    expect(isNil(null)).toBeTrue();
  });

  it('should return true for undefined values', () => {
    expect(isNil(undefined)).toBeTrue();
  });

  it('should return false for non-null and non-undefined values', () => {
    expect(isNil(0)).toBeFalse();
    expect(isNil('')).toBeFalse();
    expect(isNil(false)).toBeFalse();
    expect(isNil({})).toBeFalse();
  });
});

describe('isUndefined', () => {
  it('should return true for undefined values', () => {
    expect(isUndefined(undefined)).toBeTrue();
  });

  it('should return false for non-undefined values', () => {
    expect(isUndefined(null)).toBeFalse();
    expect(isUndefined(0)).toBeFalse();
    expect(isUndefined('')).toBeFalse();
    expect(isUndefined(false)).toBeFalse();
    expect(isUndefined({})).toBeFalse();
  });
});

describe('isBlankString', () => {
  it('should return true for empty strings', () => {
    expect(isBlankString('')).toBeTrue();
  });

  it('should return false for non-empty strings', () => {
    expect(isBlankString('hello')).toBeFalse();
    expect(isBlankString(' ')).toBeFalse();
    expect(isBlankString('   ')).toBeFalse();
  });

  it('should return false for non-string values', () => {
    expect(isBlankString(null)).toBeFalse();
    expect(isBlankString(undefined)).toBeFalse();
    expect(isBlankString(0)).toBeFalse();
    expect(isBlankString(false)).toBeFalse();
    expect(isBlankString({})).toBeFalse();
  });
});

describe('isFunction', () => {
  it('should return true for function values', () => {
    expect(isFunction(() => {})).toBeTrue();
    expect(isFunction(function () {})).toBeTrue();
    expect(isFunction(async () => {})).toBeTrue();
    expect(isFunction(class Test {})).toBeTrue();
  });

  it('should return false for non-function values', () => {
    expect(isFunction(null)).toBeFalse();
    expect(isFunction(undefined)).toBeFalse();
    expect(isFunction(0)).toBeFalse();
    expect(isFunction('')).toBeFalse();
    expect(isFunction(false)).toBeFalse();
    expect(isFunction({})).toBeFalse();
  });
});
