import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_getBackendServiceLocalityLbPolicyPolicy,
  compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes,
} from "./compute_getBackendServiceLocalityLbPolicyPolicy";
import {
  compute_getBackendServiceLocalityLbPolicyCustomPolicy,
  compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes,
} from "./compute_getBackendServiceLocalityLbPolicyCustomPolicy";

export interface compute_getBackendServiceLocalityLbPolicy {
  // The configuration for a built-in load balancing policy.
  policies?: Array<compute_getBackendServiceLocalityLbPolicyPolicy>;

  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
*/
  customPolicies?: Array<compute_getBackendServiceLocalityLbPolicyCustomPolicy>;
}

export function compute_getBackendServiceLocalityLbPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "policies",
      "The configuration for a built-in load balancing policy.",
      compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customPolicies",
      "The configuration for a custom policy implemented by the user and\ndeployed with the client.",
      compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
