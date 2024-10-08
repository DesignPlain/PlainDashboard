import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey {
  /*
A PEM-encoded public key, as described in
`https://tools.ietf.org/html/rfc7468#section-13`
*/
  publicKeyPem?: string;

  /*
The signature algorithm used to verify a message against
a signature using this key. These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).

- - -
*/
  signatureAlgorithm?: string;
}

export function binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'publicKeyPem',
      'A PEM-encoded public key, as described in\n`https://tools.ietf.org/html/rfc7468#section-13`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'signatureAlgorithm',
      'The signature algorithm used to verify a message against\na signature using this key. These signature algorithm must\nmatch the structure and any object identifiers encoded in\npublicKeyPem (i.e. this algorithm must match that of the\npublic key).\n\n- - -',
      () => [],
      false,
      false,
    ),
  ];
}
