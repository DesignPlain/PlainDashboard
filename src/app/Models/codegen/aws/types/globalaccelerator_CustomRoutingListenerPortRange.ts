import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface globalaccelerator_CustomRoutingListenerPortRange {
  // The first port in the range of ports, inclusive.
  fromPort?: number;

  // The last port in the range of ports, inclusive.
  toPort?: number;
}

export function globalaccelerator_CustomRoutingListenerPortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'fromPort',
      'The first port in the range of ports, inclusive.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'toPort',
      'The last port in the range of ports, inclusive.',
      () => [],
      false,
      false,
    ),
  ];
}
