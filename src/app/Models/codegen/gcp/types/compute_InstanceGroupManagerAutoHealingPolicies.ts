import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceGroupManagerAutoHealingPolicies {
  // The health check resource that signals autohealing.
  healthCheck?: string;

  /*
The number of seconds that the managed instance group waits before
it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
*/
  initialDelaySec?: number;
}

export function compute_InstanceGroupManagerAutoHealingPolicies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "healthCheck",
      "The health check resource that signals autohealing.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySec",
      "The number of seconds that the managed instance group waits before\nit applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.",
      () => [],
      true,
      false,
    ),
  ];
}
