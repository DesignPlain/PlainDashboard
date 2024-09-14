import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes,
} from "./autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification";
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes,
} from "./autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride";

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplate {
  // Override the instance launch template specification in the Launch Template.
  launchTemplateSpecification?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;

  // List of nested arguments provides the ability to specify multiple instance types. This will override the same parameter in the launch template. For on-demand instances, Auto Scaling considers the order of preference of instance types to launch based on the order specified in the overrides list. Defined below.
  overrides?: Array<autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride>;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "launchTemplateSpecification",
      "Override the instance launch template specification in the Launch Template.",
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "overrides",
      "List of nested arguments provides the ability to specify multiple instance types. This will override the same parameter in the launch template. For on-demand instances, Auto Scaling considers the order of preference of instance types to launch based on the order specified in the overrides list. Defined below.",
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
