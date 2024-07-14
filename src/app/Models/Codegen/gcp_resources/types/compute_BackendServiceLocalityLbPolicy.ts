import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_BackendServiceLocalityLbPolicyCustomPolicy,
  compute_BackendServiceLocalityLbPolicyCustomPolicy_GetTypes,
} from "./compute_BackendServiceLocalityLbPolicyCustomPolicy";
import {
  compute_BackendServiceLocalityLbPolicyPolicy,
  compute_BackendServiceLocalityLbPolicyPolicy_GetTypes,
} from "./compute_BackendServiceLocalityLbPolicyPolicy";

export interface compute_BackendServiceLocalityLbPolicy {
  /*
The configuration for a custom policy implemented by the user and
deployed with the client.
Structure is documented below.
*/
  customPolicy?: compute_BackendServiceLocalityLbPolicyCustomPolicy;

  /*
The configuration for a built-in load balancing policy.
Structure is documented below.
*/
  policy?: compute_BackendServiceLocalityLbPolicyPolicy;
}

export function compute_BackendServiceLocalityLbPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customPolicy",
      "The configuration for a custom policy implemented by the user and\ndeployed with the client.\nStructure is documented below.",
      compute_BackendServiceLocalityLbPolicyCustomPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "policy",
      "The configuration for a built-in load balancing policy.\nStructure is documented below.",
      compute_BackendServiceLocalityLbPolicyPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
