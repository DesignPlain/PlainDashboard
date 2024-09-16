import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
  /*
A list of custom Content-Type header values to apply the JSON parsing. The
format of the Content-Type header values is defined in
[RFC 1341](https://www.ietf.org/rfc/rfc1341.txt). When configuring a custom Content-Type header
value, only the type/subtype needs to be specified, and the parameters should be excluded.
*/
  contentTypes?: Array<string>;
}

export function compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'contentTypes',
      'A list of custom Content-Type header values to apply the JSON parsing. The\nformat of the Content-Type header values is defined in\n[RFC 1341](https://www.ietf.org/rfc/rfc1341.txt). When configuring a custom Content-Type header\nvalue, only the type/subtype needs to be specified, and the parameters should be excluded.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
