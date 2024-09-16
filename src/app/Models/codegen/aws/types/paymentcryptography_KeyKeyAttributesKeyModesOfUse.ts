import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface paymentcryptography_KeyKeyAttributesKeyModesOfUse {
  // Whether an AWS Payment Cryptography key can be used to unwrap other keys.
  unwrap?: boolean;

  // Whether an AWS Payment Cryptography key can be used to wrap other keys.
  wrap?: boolean;

  // Whether an AWS Payment Cryptography key can be used to decrypt data.
  decrypt?: boolean;

  // Whether an AWS Payment Cryptography key can be used to generate and verify other card and PIN verification keys.
  generate?: boolean;

  // Whether an AWS Payment Cryptography key has no special restrictions other than the restrictions implied by KeyUsage.
  noRestrictions?: boolean;

  // Whether an AWS Payment Cryptography key can be used for signing.
  sign?: boolean;

  // Whether an AWS Payment Cryptography key can be used to derive new keys.
  deriveKey?: boolean;

  // Whether an AWS Payment Cryptography key can be used to encrypt data.
  encrypt?: boolean;

  // Whether an AWS Payment Cryptography key can be used to verify signatures.
  verify?: boolean;
}

export function paymentcryptography_KeyKeyAttributesKeyModesOfUse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'sign',
      'Whether an AWS Payment Cryptography key can be used for signing.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'deriveKey',
      'Whether an AWS Payment Cryptography key can be used to derive new keys.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'unwrap',
      'Whether an AWS Payment Cryptography key can be used to unwrap other keys.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'wrap',
      'Whether an AWS Payment Cryptography key can be used to wrap other keys.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'noRestrictions',
      'Whether an AWS Payment Cryptography key has no special restrictions other than the restrictions implied by KeyUsage.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'verify',
      'Whether an AWS Payment Cryptography key can be used to verify signatures.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'decrypt',
      'Whether an AWS Payment Cryptography key can be used to decrypt data.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'generate',
      'Whether an AWS Payment Cryptography key can be used to generate and verify other card and PIN verification keys.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'encrypt',
      'Whether an AWS Payment Cryptography key can be used to encrypt data.',
      () => [],
      false,
      false,
    ),
  ];
}
