import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification";

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride {
  // Number of capacity units, which gives the instance type a proportional weight to other instance types.
  weightedCapacity?: string;

  /*
List of instance requirements objects.
- `accelerator_count - List of objects describing the minimum and maximum number of accelerators for an instance type.
*/
  instanceRequirements?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement>;

  // Overriding instance type.
  instanceType?: string;

  // List of overriding launch template specification objects.
  launchTemplateSpecifications?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification>;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "weightedCapacity",
      "Number of capacity units, which gives the instance type a proportional weight to other instance types.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceRequirements",
      "List of instance requirements objects.\n* `accelerator_count - List of objects describing the minimum and maximum number of accelerators for an instance type.",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Overriding instance type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchTemplateSpecifications",
      "List of overriding launch template specification objects.",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes(),
      true,
      false,
    ),
  ];
}
