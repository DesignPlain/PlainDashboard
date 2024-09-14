import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface securitylake_DataLakeConfigurationEncryptionConfiguration {
  // The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.
  kmsKeyId?: string;
}

export function securitylake_DataLakeConfigurationEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.",
      () => [],
      true,
      false,
    ),
  ];
}
