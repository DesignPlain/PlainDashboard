import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getBackendServiceLocalityLbPolicyCustomPolicy,
  compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes,
} from './compute_getBackendServiceLocalityLbPolicyCustomPolicy';
import {
  compute_getBackendServiceLocalityLbPolicyPolicy,
  compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes,
} from './compute_getBackendServiceLocalityLbPolicyPolicy';

export interface compute_getBackendServiceLocalityLbPolicy {
  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
*/
  customPolicies?: Array<compute_getBackendServiceLocalityLbPolicyCustomPolicy>;

  // The configuration for a built-in load balancing policy.
  policies?: Array<compute_getBackendServiceLocalityLbPolicyPolicy>;
}

export function compute_getBackendServiceLocalityLbPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'customPolicies',
      'The configuration for a custom policy implemented by the user and\ndeployed with the client.',
      () => compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'policies',
      'The configuration for a built-in load balancing policy.',
      () => compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
