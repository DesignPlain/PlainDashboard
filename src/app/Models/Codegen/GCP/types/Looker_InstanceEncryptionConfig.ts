import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Looker_InstanceEncryptionConfig {
  // Name of the customer managed encryption key (CMEK) in KMS.
  KmsKeyName?: string;

  /*
(Output)
Full name and version of the CMEK key currently in use to encrypt Looker data.
*/
  KmsKeyNameVersion?: string;

  /*
(Output)
Status of the customer managed encryption key (CMEK) in KMS.
*/
  KmsKeyState?: string;
}

export function Looker_InstanceEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyNameVersion",
      "(Output)\nFull name and version of the CMEK key currently in use to encrypt Looker data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyState",
      "(Output)\nStatus of the customer managed encryption key (CMEK) in KMS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Name of the customer managed encryption key (CMEK) in KMS.",
      [],
      false,
      false,
    ),
  ];
}
