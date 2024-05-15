import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Binaryauthorization_AttestorAttestationAuthorityNotePublicKey,
  Binaryauthorization_AttestorAttestationAuthorityNotePublicKey_GetTypes,
} from "./Binaryauthorization_AttestorAttestationAuthorityNotePublicKey";

export interface Binaryauthorization_AttestorAttestationAuthorityNote {
  /*
(Output)
This field will contain the service account email address that
this Attestor will use as the principal when querying Container
Analysis. Attestor administrators must grant this service account
the IAM role needed to read attestations from the noteReference in
Container Analysis (containeranalysis.notes.occurrences.viewer).
This email address is fixed for the lifetime of the Attestor, but
callers should not make any other assumptions about the service
account email; future versions may use an email based on a
different naming pattern.
*/
  DelegationServiceAccountEmail?: string;

  /*
The resource name of a ATTESTATION_AUTHORITY Note, created by the
user. If the Note is in a different project from the Attestor, it
should be specified in the format `projects/-/notes/-` (or the legacy
`providers/-/notes/-`). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note.
*/
  NoteReference?: string;

  /*
Public keys that verify attestations signed by this attestor. This
field may be updated.
If this field is non-empty, one of the specified public keys must
verify that an attestation was signed by this attestor for the
image specified in the admission request.
If this field is empty, this attestor always returns that no valid
attestations exist.
Structure is documented below.
*/
  PublicKeys?: Array<Binaryauthorization_AttestorAttestationAuthorityNotePublicKey>;
}

export function Binaryauthorization_AttestorAttestationAuthorityNote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DelegationServiceAccountEmail",
      "(Output)\nThis field will contain the service account email address that\nthis Attestor will use as the principal when querying Container\nAnalysis. Attestor administrators must grant this service account\nthe IAM role needed to read attestations from the noteReference in\nContainer Analysis (containeranalysis.notes.occurrences.viewer).\nThis email address is fixed for the lifetime of the Attestor, but\ncallers should not make any other assumptions about the service\naccount email; future versions may use an email based on a\ndifferent naming pattern.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NoteReference",
      "The resource name of a ATTESTATION_AUTHORITY Note, created by the\nuser. If the Note is in a different project from the Attestor, it\nshould be specified in the format `projects/*/notes/*` (or the legacy\n`providers/*/notes/*`). This field may not be updated.\nAn attestation by this attestor is stored as a Container Analysis\nATTESTATION_AUTHORITY Occurrence that names a container image\nand that links to this Note.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PublicKeys",
      "Public keys that verify attestations signed by this attestor. This\nfield may be updated.\nIf this field is non-empty, one of the specified public keys must\nverify that an attestation was signed by this attestor for the\nimage specified in the admission request.\nIf this field is empty, this attestor always returns that no valid\nattestations exist.\nStructure is documented below.",
      Binaryauthorization_AttestorAttestationAuthorityNotePublicKey_GetTypes(),
      false,
      false,
    ),
  ];
}
