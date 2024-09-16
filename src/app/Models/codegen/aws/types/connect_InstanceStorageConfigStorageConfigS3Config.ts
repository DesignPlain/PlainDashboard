import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig,
  connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig_GetTypes,
} from './connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig';

export interface connect_InstanceStorageConfigStorageConfigS3Config {
  // The S3 bucket name.
  bucketName?: string;

  // The S3 bucket prefix.
  bucketPrefix?: string;

  // The encryption configuration. Documented below.
  encryptionConfig?: connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;
}

export function connect_InstanceStorageConfigStorageConfigS3Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'The S3 bucket name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketPrefix',
      'The S3 bucket prefix.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'encryptionConfig',
      'The encryption configuration. Documented below.',
      () =>
        connect_InstanceStorageConfigStorageConfigS3ConfigEncryptionConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
