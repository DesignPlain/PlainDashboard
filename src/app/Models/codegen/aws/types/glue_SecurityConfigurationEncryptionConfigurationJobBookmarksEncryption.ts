import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
  // Encryption mode to use for job bookmarks data. Valid values: `CSE-KMS`, `DISABLED`. Default value: `DISABLED`.
  jobBookmarksEncryptionMode?: string;

  // Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
  kmsKeyArn?: string;
}

export function glue_SecurityConfigurationEncryptionConfigurationJobBookmarksEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "jobBookmarksEncryptionMode",
      "Encryption mode to use for job bookmarks data. Valid values: `CSE-KMS`, `DISABLED`. Default value: `DISABLED`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.",
      () => [],
      false,
      true,
    ),
  ];
}
