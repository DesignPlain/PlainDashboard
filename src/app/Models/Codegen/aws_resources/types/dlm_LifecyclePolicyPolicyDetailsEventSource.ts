import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dlm_LifecyclePolicyPolicyDetailsEventSourceParameters,
  dlm_LifecyclePolicyPolicyDetailsEventSourceParameters_GetTypes,
} from "./dlm_LifecyclePolicyPolicyDetailsEventSourceParameters";

export interface dlm_LifecyclePolicyPolicyDetailsEventSource {
  // Information about the event. See the `parameters` configuration block.
  parameters?: dlm_LifecyclePolicyPolicyDetailsEventSourceParameters;

  // The source of the event. Currently only managed CloudWatch Events rules are supported. Valid values are `MANAGED_CWE`.
  type?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsEventSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "parameters",
      "Information about the event. See the `parameters` configuration block.",
      dlm_LifecyclePolicyPolicyDetailsEventSourceParameters_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The source of the event. Currently only managed CloudWatch Events rules are supported. Valid values are `MANAGED_CWE`.",
      [],
      true,
      false,
    ),
  ];
}
