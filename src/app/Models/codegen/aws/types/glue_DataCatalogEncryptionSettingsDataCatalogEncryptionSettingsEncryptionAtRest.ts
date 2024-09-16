import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  // The encryption-at-rest mode for encrypting Data Catalog data. Valid values: `DISABLED`, `SSE-KMS`, `SSE-KMS-WITH-SERVICE-ROLE`.
  catalogEncryptionMode?: string;

  // The ARN of the AWS IAM role used for accessing encrypted Data Catalog data.
  catalogEncryptionServiceRole?: string;

  // The ARN of the AWS KMS key to use for encryption at rest.
  sseAwsKmsKeyId?: string;
}

export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'catalogEncryptionMode',
      'The encryption-at-rest mode for encrypting Data Catalog data. Valid values: `DISABLED`, `SSE-KMS`, `SSE-KMS-WITH-SERVICE-ROLE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'catalogEncryptionServiceRole',
      'The ARN of the AWS IAM role used for accessing encrypted Data Catalog data.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sseAwsKmsKeyId',
      'The ARN of the AWS KMS key to use for encryption at rest.',
      () => [],
      false,
      false,
    ),
  ];
}
