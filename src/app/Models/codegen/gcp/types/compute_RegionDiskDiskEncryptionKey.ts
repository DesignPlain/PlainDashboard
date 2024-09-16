import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionDiskDiskEncryptionKey {
  /*
Specifies a 256-bit customer-supplied encryption key, encoded in
RFC 4648 base64 to either encrypt or decrypt this resource.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  rawKey?: string;

  /*
(Output)
The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied
encryption key that protects this resource.
*/
  sha256?: string;

  // The name of the encryption key that is stored in Google Cloud KMS.
  kmsKeyName?: string;
}

export function compute_RegionDiskDiskEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'rawKey',
      'Specifies a 256-bit customer-supplied encryption key, encoded in\nRFC 4648 base64 to either encrypt or decrypt this resource.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'sha256',
      '(Output)\nThe RFC 4648 base64 encoded SHA-256 hash of the customer-supplied\nencryption key that protects this resource.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyName',
      'The name of the encryption key that is stored in Google Cloud KMS.',
      () => [],
      false,
      true,
    ),
  ];
}
