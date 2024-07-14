import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement";

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride {
  // Overriding instance type.
  instanceType?: string;

  // List of overriding launch template specification objects.
  launchTemplateSpecifications?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification>;

  // Number of capacity units, which gives the instance type a proportional weight to other instance types.
  weightedCapacity?: string;

  /*
List of instance requirements objects.
- `accelerator_count - List of objects describing the minimum and maximum number of accelerators for an instance type.
*/
  instanceRequirements?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement>;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "weightedCapacity",
      "Number of capacity units, which gives the instance type a proportional weight to other instance types.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceRequirements",
      "List of instance requirements objects.\n* `accelerator_count - List of objects describing the minimum and maximum number of accelerators for an instance type.",
      autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Overriding instance type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchTemplateSpecifications",
      "List of overriding launch template specification objects.",
      autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes(),
      true,
      false,
    ),
  ];
}
