import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  paymentcryptography_KeyKeyAttributesKeyModesOfUse,
  paymentcryptography_KeyKeyAttributesKeyModesOfUse_GetTypes,
} from './paymentcryptography_KeyKeyAttributesKeyModesOfUse';

export interface paymentcryptography_KeyKeyAttributes {
  // List of cryptographic operations that you can perform using the key.
  keyModesOfUse?: paymentcryptography_KeyKeyAttributesKeyModesOfUse;

  // Cryptographic usage of an AWS Payment Cryptography key as defined in section A.5.2 of the TR-31 spec.
  keyUsage?: string;

  // Key algorithm to be use during creation of an AWS Payment Cryptography key.
  keyAlgorithm?: string;

  // Type of AWS Payment Cryptography key to create.
  keyClass?: string;
}

export function paymentcryptography_KeyKeyAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'keyModesOfUse',
      'List of cryptographic operations that you can perform using the key.',
      () => paymentcryptography_KeyKeyAttributesKeyModesOfUse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyUsage',
      'Cryptographic usage of an AWS Payment Cryptography key as defined in section A.5.2 of the TR-31 spec.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyAlgorithm',
      'Key algorithm to be use during creation of an AWS Payment Cryptography key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyClass',
      'Type of AWS Payment Cryptography key to create.',
      () => [],
      true,
      false,
    ),
  ];
}
