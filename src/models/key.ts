type DIGIT = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SIGN = '+' | '-' | 'x' | '/' | '=' | '%' | 'C';
type KeyType = 'CLEAR' | 'MOD' | 'MINUS' | 'PLUS' | 'TIMES' | 'DIV' | 'EQUALS' | 'DIGIT';

export interface Key {
  'type': KeyType;
  'value'?: DIGIT | SIGN;
}

export function Operator(keyType: KeyType, val?: SIGN): Key {
  if (val) {
    return {type: keyType, value: val};
  }
  return {'type': keyType};
}

export function Digit(val: DIGIT): Key {
  return {'type': 'DIGIT', 'value': val};
}
