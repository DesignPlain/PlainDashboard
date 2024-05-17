import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterVerticalPodAutoscaling {
  // Enables vertical pod autoscaling
  Enabled?: boolean;
}

export function Container_ClusterVerticalPodAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enables vertical pod autoscaling",
      [],
      true,
      false,
    ),
  ];
}
