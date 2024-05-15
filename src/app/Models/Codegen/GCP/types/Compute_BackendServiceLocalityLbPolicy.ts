import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_BackendServiceLocalityLbPolicyCustomPolicy,
  Compute_BackendServiceLocalityLbPolicyCustomPolicy_GetTypes,
} from "./Compute_BackendServiceLocalityLbPolicyCustomPolicy";
import {
  Compute_BackendServiceLocalityLbPolicyPolicy,
  Compute_BackendServiceLocalityLbPolicyPolicy_GetTypes,
} from "./Compute_BackendServiceLocalityLbPolicyPolicy";

export interface Compute_BackendServiceLocalityLbPolicy {
  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
Structure is documented below.
*/
  CustomPolicy?: Compute_BackendServiceLocalityLbPolicyCustomPolicy;

  /*
The configuration for a built-in load balancing policy.
Structure is documented below.
*/
  Policy?: Compute_BackendServiceLocalityLbPolicyPolicy;
}

export function Compute_BackendServiceLocalityLbPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CustomPolicy",
      "The configuration for a custom policy implemented by the user and\ndeployed with the client.\nStructure is documented below.",
      Compute_BackendServiceLocalityLbPolicyCustomPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Policy",
      "The configuration for a built-in load balancing policy.\nStructure is documented below.",
      Compute_BackendServiceLocalityLbPolicyPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
