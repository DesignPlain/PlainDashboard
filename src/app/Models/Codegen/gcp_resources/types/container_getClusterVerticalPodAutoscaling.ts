import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterVerticalPodAutoscaling {
  // Enables vertical pod autoscaling.
  enabled?: boolean;
}

export function container_getClusterVerticalPodAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables vertical pod autoscaling.",
      [],
      true,
      false,
    ),
  ];
}
