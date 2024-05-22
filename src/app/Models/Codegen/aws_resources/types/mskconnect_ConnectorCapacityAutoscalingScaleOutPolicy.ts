import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy {
  // The CPU utilization percentage threshold at which you want connector scale out to be triggered.
  cpuUtilizationPercentage?: number;
}

export function mskconnect_ConnectorCapacityAutoscalingScaleOutPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpuUtilizationPercentage",
      "The CPU utilization percentage threshold at which you want connector scale out to be triggered.",
      [],
      false,
      false,
    ),
  ];
}
