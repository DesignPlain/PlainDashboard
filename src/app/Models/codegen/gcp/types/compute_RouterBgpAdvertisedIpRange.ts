import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RouterBgpAdvertisedIpRange {
  // User-specified description for the IP range.
  description?: string;

  /*
The IP range to advertise. The value must be a
CIDR-formatted string.
*/
  range?: string;
}

export function compute_RouterBgpAdvertisedIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'User-specified description for the IP range.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'range',
      'The IP range to advertise. The value must be a\nCIDR-formatted string.',
      () => [],
      true,
      false,
    ),
  ];
}
