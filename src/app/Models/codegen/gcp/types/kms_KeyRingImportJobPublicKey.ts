import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kms_KeyRingImportJobPublicKey {
  /*
(Output)
The public key, encoded in PEM format. For more information, see the RFC 7468 sections
for General Considerations and Textual Encoding of Subject Public Key Info.
*/
  pem?: string;
}

export function kms_KeyRingImportJobPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'pem',
      '(Output)\nThe public key, encoded in PEM format. For more information, see the RFC 7468 sections\nfor General Considerations and Textual Encoding of Subject Public Key Info.',
      () => [],
      false,
      false,
    ),
  ];
}
