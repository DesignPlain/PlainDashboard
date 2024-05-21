import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface containeranalysis_NoteAttestationAuthorityHint {
  /*
The human readable name of this Attestation Authority, for
example "qa".

- - -
*/
  humanReadableName?: string;
}

export function containeranalysis_NoteAttestationAuthorityHint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "humanReadableName",
      'The human readable name of this Attestation Authority, for\nexample "qa".\n\n- - -',
      [],
      true,
      false,
    ),
  ];
}
