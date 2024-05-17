import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceGroupManagerAutoHealingPolicies {
  // The health check resource that signals autohealing.
  HealthCheck?: string;

  /*
The number of seconds that the managed instance group waits before
it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
*/
  InitialDelaySec?: number;
}

export function Compute_InstanceGroupManagerAutoHealingPolicies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HealthCheck",
      "The health check resource that signals autohealing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySec",
      "The number of seconds that the managed instance group waits before\nit applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.",
      [],
      true,
      false,
    ),
  ];
}
