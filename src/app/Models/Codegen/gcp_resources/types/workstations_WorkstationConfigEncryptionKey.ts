import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workstations_WorkstationConfigEncryptionKey {
  // The name of the Google Cloud KMS encryption key.
  kmsKey?: string;

  // The service account to use with the specified KMS key.
  kmsKeyServiceAccount?: string;
}

export function workstations_WorkstationConfigEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "The name of the Google Cloud KMS encryption key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyServiceAccount",
      "The service account to use with the specified KMS key.",
      [],
      true,
      false,
    ),
  ];
}
