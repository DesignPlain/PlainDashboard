import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2transitgateway_getMulticastDomainSource {
  // The group members' network interface ID.
  networkInterfaceId?: string;

  // The IP address assigned to the transit gateway multicast group.
  groupIpAddress?: string;
}

export function ec2transitgateway_getMulticastDomainSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'networkInterfaceId',
      "The group members' network interface ID.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'groupIpAddress',
      'The IP address assigned to the transit gateway multicast group.',
      () => [],
      true,
      false,
    ),
  ];
}
