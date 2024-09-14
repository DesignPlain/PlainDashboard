import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kms_KeyRingImportJobAttestation {
  /*
(Output)
The attestation data provided by the HSM when the key operation was performed.
A base64-encoded string.
*/
  content?: string;

  /*
(Output)
The format of the attestation data.
*/
  format?: string;
}

export function kms_KeyRingImportJobAttestation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "(Output)\nThe attestation data provided by the HSM when the key operation was performed.\nA base64-encoded string.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "(Output)\nThe format of the attestation data.",
      () => [],
      false,
      false,
    ),
  ];
}
