import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface globalaccelerator_getCustomRoutingAcceleratorIpSet {
  //
  ipAddresses?: Array<string>;

  //
  ipFamily?: string;
}

export function globalaccelerator_getCustomRoutingAcceleratorIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ipAddresses',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'ipFamily', '', () => [], true, false),
  ];
}
