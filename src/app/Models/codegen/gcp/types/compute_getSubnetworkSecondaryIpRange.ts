import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getSubnetworkSecondaryIpRange {
  /*
The name associated with this subnetwork secondary range, used
when adding an alias IP range to a VM instance.
*/
  rangeName?: string;

  /*
The range of IP addresses belonging to this subnetwork
secondary range.
*/
  ipCidrRange?: string;
}

export function compute_getSubnetworkSecondaryIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'rangeName',
      'The name associated with this subnetwork secondary range, used\nwhen adding an alias IP range to a VM instance.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipCidrRange',
      'The range of IP addresses belonging to this subnetwork\nsecondary range.',
      () => [],
      true,
      false,
    ),
  ];
}
