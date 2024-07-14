import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes,
} from "./autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification";
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements_GetTypes,
} from "./autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements";

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride {
  // Override the instance type in the Launch Template with instance types that satisfy the requirements.
  instanceRequirements?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements;

  // Override the instance type in the Launch Template.
  instanceType?: string;

  // Override the instance launch template specification in the Launch Template.
  launchTemplateSpecification?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;

  // Number of capacity units, which gives the instance type a proportional weight to other instance types.
  weightedCapacity?: string;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Override the instance type in the Launch Template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "launchTemplateSpecification",
      "Override the instance launch template specification in the Launch Template.",
      autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "weightedCapacity",
      "Number of capacity units, which gives the instance type a proportional weight to other instance types.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "instanceRequirements",
      "Override the instance type in the Launch Template with instance types that satisfy the requirements.",
      autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements_GetTypes(),
      false,
      false,
    ),
  ];
}
