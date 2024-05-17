import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Kms_KeyRingImportJobAttestation {
  /*
(Output)
The format of the attestation data.
*/
  Format?: string;

  /*
(Output)
The attestation data provided by the HSM when the key operation was performed.
A base64-encoded string.
*/
  Content?: string;
}

export function Kms_KeyRingImportJobAttestation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Format",
      "(Output)\nThe format of the attestation data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Content",
      "(Output)\nThe attestation data provided by the HSM when the key operation was performed.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
  ];
}
