import { NoteAttestationAuthorityHint } from "./NoteAttestationAuthorityHint";

export interface NoteAttestationAuthority {
  /*
This submessage provides human-readable hints about the purpose of
the AttestationAuthority. Because the name of a Note acts as its
resource reference, it is important to disambiguate the canonical
name of the Note (which might be a UUID for security purposes)
from "readable" names more suitable for debug output. Note that
these hints should NOT be used to look up AttestationAuthorities
in security sensitive contexts, such as when looking up
Attestations to verify.
Structure is documented below.
*/
  Hint?: NoteAttestationAuthorityHint;
}
