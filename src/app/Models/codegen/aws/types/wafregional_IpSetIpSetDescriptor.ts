import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafregional_IpSetIpSetDescriptor {
  // The CIDR notation.
  value?: string;

  // The string like IPV4 or IPV6.
  type?: string;
}

export function wafregional_IpSetIpSetDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'The CIDR notation.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The string like IPV4 or IPV6.',
      () => [],
      true,
      false,
    ),
  ];
}
