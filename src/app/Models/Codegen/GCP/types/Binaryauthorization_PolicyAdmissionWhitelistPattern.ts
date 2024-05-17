import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Binaryauthorization_PolicyAdmissionWhitelistPattern {
  /*
An image name pattern to whitelist, in the form
`registry/path/to/image`. This supports a trailing - as a
wildcard, but this is allowed only in text after the registry/
part.
*/
  NamePattern?: string;
}

export function Binaryauthorization_PolicyAdmissionWhitelistPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NamePattern",
      "An image name pattern to whitelist, in the form\n`registry/path/to/image`. This supports a trailing * as a\nwildcard, but this is allowed only in text after the registry/\npart.",
      [],
      true,
      false,
    ),
  ];
}
