import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest {
  // The encryption-at-rest mode for encrypting Data Catalog data.
  catalogEncryptionMode?: string;

  // ARN of the AWS KMS key to use for encryption at rest.
  sseAwsKmsKeyId?: string;
}

export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingEncryptionAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogEncryptionMode",
      "The encryption-at-rest mode for encrypting Data Catalog data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sseAwsKmsKeyId",
      "ARN of the AWS KMS key to use for encryption at rest.",
      [],
      true,
      false,
    ),
  ];
}
