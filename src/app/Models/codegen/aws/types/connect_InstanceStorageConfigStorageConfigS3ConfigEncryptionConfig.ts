import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {
  // The type of encryption. Valid Values: `KMS`.
  encryptionType?: string;

  // The full ARN of the encryption key. Be sure to provide the full ARN of the encryption key, not just the ID.
  keyId?: string;
}

export function connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'encryptionType',
      'The type of encryption. Valid Values: `KMS`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyId',
      'The full ARN of the encryption key. Be sure to provide the full ARN of the encryption key, not just the ID.',
      () => [],
      true,
      false,
    ),
  ];
}
