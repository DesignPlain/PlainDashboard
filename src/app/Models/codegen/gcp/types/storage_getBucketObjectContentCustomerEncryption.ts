import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storage_getBucketObjectContentCustomerEncryption {
  // The encryption algorithm. Default: AES256
  encryptionAlgorithm?: string;

  // Base64 encoded customer supplied encryption key.
  encryptionKey?: string;
}

export function storage_getBucketObjectContentCustomerEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'encryptionAlgorithm',
      'The encryption algorithm. Default: AES256',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'encryptionKey',
      'Base64 encoded customer supplied encryption key.',
      () => [],
      true,
      false,
    ),
  ];
}
