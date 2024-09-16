import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption,
  glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption_GetTypes,
} from './glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption';
import {
  glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption,
  glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption_GetTypes,
} from './glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption';
import {
  glue_SecurityConfigurationEncryptionConfigurationS3Encryption,
  glue_SecurityConfigurationEncryptionConfigurationS3Encryption_GetTypes,
} from './glue_SecurityConfigurationEncryptionConfigurationS3Encryption';

export interface glue_SecurityConfigurationEncryptionConfiguration {
  //
  cloudwatchEncryption?: glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption;

  //
  jobBookmarksEncryption?: glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;

  // A `s3_encryption ` block as described below, which contains encryption configuration for S3 data.
  s3Encryption?: glue_SecurityConfigurationEncryptionConfigurationS3Encryption;
}

export function glue_SecurityConfigurationEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'jobBookmarksEncryption',
      '',
      () =>
        glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Encryption',
      'A `s3_encryption ` block as described below, which contains encryption configuration for S3 data.',
      () =>
        glue_SecurityConfigurationEncryptionConfigurationS3Encryption_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudwatchEncryption',
      '',
      () =>
        glue_SecurityConfigurationEncryptionConfigurationCloudwatchEncryption_GetTypes(),
      true,
      true,
    ),
  ];
}
