import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Containeranalysis_NoteAttestationAuthorityHint,
  Containeranalysis_NoteAttestationAuthorityHint_GetTypes,
} from "./Containeranalysis_NoteAttestationAuthorityHint";

export interface Containeranalysis_NoteAttestationAuthority {
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
  Hint?: Containeranalysis_NoteAttestationAuthorityHint;
}

export function Containeranalysis_NoteAttestationAuthority_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Hint",
      'This submessage provides human-readable hints about the purpose of\nthe AttestationAuthority. Because the name of a Note acts as its\nresource reference, it is important to disambiguate the canonical\nname of the Note (which might be a UUID for security purposes)\nfrom "readable" names more suitable for debug output. Note that\nthese hints should NOT be used to look up AttestationAuthorities\nin security sensitive contexts, such as when looking up\nAttestations to verify.\nStructure is documented below.',
      Containeranalysis_NoteAttestationAuthorityHint_GetTypes(),
      true,
      false,
    ),
  ];
}
