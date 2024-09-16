import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest {
  // The ARN of the AWS IAM role used for accessing encrypted Data Catalog data.
  catalogEncryptionServiceRole?: string;

  // ARN of the AWS KMS key to use for encryption at rest.
  sseAwsKmsKeyId?: string;

  // The encryption-at-rest mode for encrypting Data Catalog data.
  catalogEncryptionMode?: string;
}

export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sseAwsKmsKeyId',
      'ARN of the AWS KMS key to use for encryption at rest.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'catalogEncryptionMode',
      'The encryption-at-rest mode for encrypting Data Catalog data.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'catalogEncryptionServiceRole',
      'The ARN of the AWS IAM role used for accessing encrypted Data Catalog data.',
      () => [],
      true,
      false,
    ),
  ];
}
