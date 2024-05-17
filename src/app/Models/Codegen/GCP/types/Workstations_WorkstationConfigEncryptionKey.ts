import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationConfigEncryptionKey {
  // The name of the Google Cloud KMS encryption key.
  KmsKey?: string;

  // The service account to use with the specified KMS key.
  KmsKeyServiceAccount?: string;
}

export function Workstations_WorkstationConfigEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKey",
      "The name of the Google Cloud KMS encryption key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyServiceAccount",
      "The service account to use with the specified KMS key.",
      [],
      true,
      false,
    ),
  ];
}
