import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
