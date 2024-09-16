import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkconnectivity_PolicyBasedRouteVirtualMachine {
  // A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR.
  tags?: Array<string>;
}

export function networkconnectivity_PolicyBasedRouteVirtualMachine_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'tags',
      'A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
