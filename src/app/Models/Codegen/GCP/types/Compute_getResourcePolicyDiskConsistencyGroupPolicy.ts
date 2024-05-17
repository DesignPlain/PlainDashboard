import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicyDiskConsistencyGroupPolicy {
  // Enable disk consistency on the resource policy.
  Enabled?: boolean;
}

export function Compute_getResourcePolicyDiskConsistencyGroupPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable disk consistency on the resource policy.",
      [],
      true,
      false,
    ),
  ];
}
