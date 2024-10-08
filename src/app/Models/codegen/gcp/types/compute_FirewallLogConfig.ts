import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_FirewallLogConfig {
  /*
This field denotes whether to include or exclude metadata for firewall logs.
Possible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`.
*/
  metadata?: string;
}

export function compute_FirewallLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'metadata',
      'This field denotes whether to include or exclude metadata for firewall logs.\nPossible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`.',
      () => [],
      true,
      false,
    ),
  ];
}
