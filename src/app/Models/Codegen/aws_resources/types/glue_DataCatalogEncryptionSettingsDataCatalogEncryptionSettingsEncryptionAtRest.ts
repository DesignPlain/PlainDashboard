import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
  // The encryption-at-rest mode for encrypting Data Catalog data. Valid values are `DISABLED` and `SSE-KMS`.
  catalogEncryptionMode?: string;

  // The ARN of the AWS KMS key to use for encryption at rest.
  sseAwsKmsKeyId?: string;
}

export function glue_DataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sseAwsKmsKeyId",
      "The ARN of the AWS KMS key to use for encryption at rest.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogEncryptionMode",
      "The encryption-at-rest mode for encrypting Data Catalog data. Valid values are `DISABLED` and `SSE-KMS`.",
      [],
      true,
      false,
    ),
  ];
}
