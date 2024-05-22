import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionInstanceGroupManagerAutoHealingPolicies {
  // The health check resource that signals autohealing.
  healthCheck?: string;

  /*
The number of seconds that the managed instance group waits before
it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
*/
  initialDelaySec?: number;
}

export function compute_RegionInstanceGroupManagerAutoHealingPolicies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "healthCheck",
      "The health check resource that signals autohealing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySec",
      "The number of seconds that the managed instance group waits before\nit applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.",
      [],
      true,
      false,
    ),
  ];
}
