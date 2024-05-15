import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Kms_KeyRingImportJobPublicKey {
  /*
(Output)
The public key, encoded in PEM format. For more information, see the RFC 7468 sections
for General Considerations and Textual Encoding of Subject Public Key Info.
*/
  Pem?: string;
}

export function Kms_KeyRingImportJobPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Pem",
      "(Output)\nThe public key, encoded in PEM format. For more information, see the RFC 7468 sections\nfor General Considerations and Textual Encoding of Subject Public Key Info.",
      [],
      false,
      false,
    ),
  ];
}
