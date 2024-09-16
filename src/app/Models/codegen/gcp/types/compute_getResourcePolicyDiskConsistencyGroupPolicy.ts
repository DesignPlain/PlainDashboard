import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getResourcePolicyDiskConsistencyGroupPolicy {
  // Enable disk consistency on the resource policy.
  enabled?: boolean;
}

export function compute_getResourcePolicyDiskConsistencyGroupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enable disk consistency on the resource policy.',
      () => [],
      true,
      false,
    ),
  ];
}
