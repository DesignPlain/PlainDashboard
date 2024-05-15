import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getBackendServiceLocalityLbPolicyCustomPolicy,
  Compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes,
} from "./Compute_getBackendServiceLocalityLbPolicyCustomPolicy";
import {
  Compute_getBackendServiceLocalityLbPolicyPolicy,
  Compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes,
} from "./Compute_getBackendServiceLocalityLbPolicyPolicy";

export interface Compute_getBackendServiceLocalityLbPolicy {
  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
*/
  CustomPolicies?: Array<Compute_getBackendServiceLocalityLbPolicyCustomPolicy>;

  // The configuration for a built-in load balancing policy.
  Policies?: Array<Compute_getBackendServiceLocalityLbPolicyPolicy>;
}

export function Compute_getBackendServiceLocalityLbPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CustomPolicies",
      "The configuration for a custom policy implemented by the user and\ndeployed with the client.",
      Compute_getBackendServiceLocalityLbPolicyCustomPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Policies",
      "The configuration for a built-in load balancing policy.",
      Compute_getBackendServiceLocalityLbPolicyPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
