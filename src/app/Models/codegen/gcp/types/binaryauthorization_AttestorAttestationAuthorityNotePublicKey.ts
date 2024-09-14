import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey,
  binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey_GetTypes,
} from "./binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey";

export interface binaryauthorization_AttestorAttestationAuthorityNotePublicKey {
  /*
ASCII-armored representation of a PGP public key, as the
entire output by the command
`gpg --export --armor foo@example.com` (either LF or CRLF
line endings). When using this field, id should be left
blank. The BinAuthz API handlers will calculate the ID
and fill it in automatically. BinAuthz computes this ID
as the OpenPGP RFC4880 V4 fingerprint, represented as
upper-case hex. If id is provided by the caller, it will
be overwritten by the API-calculated ID.
*/
  asciiArmoredPgpPublicKey?: string;

  // A descriptive comment. This field may be updated.
  comment?: string;

  /*
The ID of this public key. Signatures verified by BinAuthz
must include the ID of the public key that can be used to
verify them, and that ID must match the contents of this
field exactly. Additional restrictions on this field can
be imposed based on which public key type is encapsulated.
See the documentation on publicKey cases below for details.
*/
  id?: string;

  /*
A raw PKIX SubjectPublicKeyInfo format public key.
NOTE: id may be explicitly provided by the caller when using this
type of public key, but it MUST be a valid RFC3986 URI. If id is left
blank, a default one will be computed based on the digest of the DER
encoding of the public key.
Structure is documented below.
*/
  pkixPublicKey?: binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey;
}

export function binaryauthorization_AttestorAttestationAuthorityNotePublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "asciiArmoredPgpPublicKey",
      "ASCII-armored representation of a PGP public key, as the\nentire output by the command\n`gpg --export --armor foo@example.com` (either LF or CRLF\nline endings). When using this field, id should be left\nblank. The BinAuthz API handlers will calculate the ID\nand fill it in automatically. BinAuthz computes this ID\nas the OpenPGP RFC4880 V4 fingerprint, represented as\nupper-case hex. If id is provided by the caller, it will\nbe overwritten by the API-calculated ID.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comment",
      "A descriptive comment. This field may be updated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ID of this public key. Signatures verified by BinAuthz\nmust include the ID of the public key that can be used to\nverify them, and that ID must match the contents of this\nfield exactly. Additional restrictions on this field can\nbe imposed based on which public key type is encapsulated.\nSee the documentation on publicKey cases below for details.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pkixPublicKey",
      "A raw PKIX SubjectPublicKeyInfo format public key.\nNOTE: id may be explicitly provided by the caller when using this\ntype of public key, but it MUST be a valid RFC3986 URI. If id is left\nblank, a default one will be computed based on the digest of the DER\nencoding of the public key.\nStructure is documented below.",
      () =>
        binaryauthorization_AttestorAttestationAuthorityNotePublicKeyPkixPublicKey_GetTypes(),
      false,
      false,
    ),
  ];
}
