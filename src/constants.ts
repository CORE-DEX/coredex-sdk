import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export const FACTORY_ADDRESS = '0x113d2B6BE54A0D46D4cb287c82B50dB2E914b203'

export const INIT_CODE_HASH = '0x49bc0a6067f7b18489ee392419f6131ff6c252a51bea1ee17d2e0f34ffd96c28'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _999 = JSBI.BigInt(999)
export const _1000 = JSBI.BigInt(1000)
