import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride";

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplate {
  // List of overriding launch template specification objects.
  launchTemplateSpecifications?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification>;

  // List of properties overriding the same properties in the launch template.
  overrides?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride>;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "overrides",
      "List of properties overriding the same properties in the launch template.",
      autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverride_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchTemplateSpecifications",
      "List of overriding launch template specification objects.",
      autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes(),
      true,
      false,
    ),
  ];
}
