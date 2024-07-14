import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_getGroupMixedInstancesPolicyInstancesDistribution,
  autoscaling_getGroupMixedInstancesPolicyInstancesDistribution_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyInstancesDistribution";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplate,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplate_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplate";

export interface autoscaling_getGroupMixedInstancesPolicy {
  // List of instances distribution objects.
  instancesDistributions?: Array<autoscaling_getGroupMixedInstancesPolicyInstancesDistribution>;

  // List of launch templates along with the overrides.
  launchTemplates?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplate>;
}

export function autoscaling_getGroupMixedInstancesPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "instancesDistributions",
      "List of instances distribution objects.",
      autoscaling_getGroupMixedInstancesPolicyInstancesDistribution_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchTemplates",
      "List of launch templates along with the overrides.",
      autoscaling_getGroupMixedInstancesPolicyLaunchTemplate_GetTypes(),
      true,
      false,
    ),
  ];
}
