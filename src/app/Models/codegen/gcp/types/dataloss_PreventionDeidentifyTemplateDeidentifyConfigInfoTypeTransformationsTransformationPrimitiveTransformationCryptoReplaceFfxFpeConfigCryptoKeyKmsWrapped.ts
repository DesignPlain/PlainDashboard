import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped {
  /*
The wrapped data crypto key.
A base64-encoded string.
*/
  wrappedKey?: string;

  // The resource name of the KMS CryptoKey to use for unwrapping.
  cryptoKeyName?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'wrappedKey',
      'The wrapped data crypto key.\nA base64-encoded string.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cryptoKeyName',
      'The resource name of the KMS CryptoKey to use for unwrapping.',
      () => [],
      true,
      false,
    ),
  ];
}
