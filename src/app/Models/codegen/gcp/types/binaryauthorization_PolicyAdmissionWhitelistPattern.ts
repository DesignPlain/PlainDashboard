import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface binaryauthorization_PolicyAdmissionWhitelistPattern {
  /*
An image name pattern to whitelist, in the form
`registry/path/to/image`. This supports a trailing - as a
wildcard, but this is allowed only in text after the registry/
part.
*/
  namePattern?: string;
}

export function binaryauthorization_PolicyAdmissionWhitelistPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'namePattern',
      'An image name pattern to whitelist, in the form\n`registry/path/to/image`. This supports a trailing * as a\nwildcard, but this is allowed only in text after the registry/\npart.',
      () => [],
      true,
      false,
    ),
  ];
}
