import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface looker_InstanceEncryptionConfig {
  // Name of the customer managed encryption key (CMEK) in KMS.
  kmsKeyName?: string;

  /*
(Output)
Full name and version of the CMEK key currently in use to encrypt Looker data.
*/
  kmsKeyNameVersion?: string;

  /*
(Output)
Status of the customer managed encryption key (CMEK) in KMS.
*/
  kmsKeyState?: string;
}

export function looker_InstanceEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "Name of the customer managed encryption key (CMEK) in KMS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyNameVersion",
      "(Output)\nFull name and version of the CMEK key currently in use to encrypt Looker data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyState",
      "(Output)\nStatus of the customer managed encryption key (CMEK) in KMS.",
      [],
      false,
      false,
    ),
  ];
}
