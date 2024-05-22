import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplate,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplate_GetTypes,
} from "./autoscaling_GroupMixedInstancesPolicyLaunchTemplate";
import {
  autoscaling_GroupMixedInstancesPolicyInstancesDistribution,
  autoscaling_GroupMixedInstancesPolicyInstancesDistribution_GetTypes,
} from "./autoscaling_GroupMixedInstancesPolicyInstancesDistribution";

export interface autoscaling_GroupMixedInstancesPolicy {
  // Nested argument containing launch template settings along with the overrides to specify multiple instance types and weights. Defined below.
  launchTemplate?: autoscaling_GroupMixedInstancesPolicyLaunchTemplate;

  // Nested argument containing settings on how to mix on-demand and Spot instances in the Auto Scaling group. Defined below.
  instancesDistribution?: autoscaling_GroupMixedInstancesPolicyInstancesDistribution;
}

export function autoscaling_GroupMixedInstancesPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "launchTemplate",
      "Nested argument containing launch template settings along with the overrides to specify multiple instance types and weights. Defined below.",
      autoscaling_GroupMixedInstancesPolicyLaunchTemplate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "instancesDistribution",
      "Nested argument containing settings on how to mix on-demand and Spot instances in the Auto Scaling group. Defined below.",
      autoscaling_GroupMixedInstancesPolicyInstancesDistribution_GetTypes(),
      false,
      false,
    ),
  ];
}
