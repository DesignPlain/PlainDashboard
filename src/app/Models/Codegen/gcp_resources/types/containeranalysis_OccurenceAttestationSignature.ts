import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface containeranalysis_OccurenceAttestationSignature {
  /*
The identifier for the public key that verifies this
signature. MUST be an RFC3986 conformant
URI. - When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:
- OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
for more details on this scheme.
- `openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA`
- RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
- "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

- - -
*/
  publicKeyId?: string;

  /*
The content of the signature, an opaque bytestring.
The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.
*/
  signature?: string;
}

export function containeranalysis_OccurenceAttestationSignature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicKeyId",
      'The identifier for the public key that verifies this\nsignature. MUST be an RFC3986 conformant\nURI. * When possible, the key id should be an\nimmutable reference, such as a cryptographic digest.\nExamples of valid values:\n* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr\nfor more details on this scheme.\n* `openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA`\n* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):\n* "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"\n\n- - -',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "signature",
      "The content of the signature, an opaque bytestring.\nThe payload that this signature verifies MUST be\nunambiguously provided with the Signature during\nverification. A wrapper message might provide the\npayload explicitly. Alternatively, a message might\nhave a canonical serialization that can always be\nunambiguously computed to derive the payload.",
      [],
      false,
      false,
    ),
  ];
}
