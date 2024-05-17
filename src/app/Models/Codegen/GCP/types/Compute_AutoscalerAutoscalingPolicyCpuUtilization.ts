import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_AutoscalerAutoscalingPolicyCpuUtilization {
  /*
Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:
- NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
- OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.
*/
  PredictiveMethod?: string;

  /*
The target CPU utilization that the autoscaler should maintain.
Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.
If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.
If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.
*/
  Target?: number;
}

export function Compute_AutoscalerAutoscalingPolicyCpuUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PredictiveMethod",
      "Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:\n- NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.\n- OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Target",
      "The target CPU utilization that the autoscaler should maintain.\nMust be a float value in the range (0, 1]. If not specified, the\ndefault is 0.6.\nIf the CPU level is below the target utilization, the autoscaler\nscales down the number of instances until it reaches the minimum\nnumber of instances you specified or until the average CPU of\nyour instances reaches the target utilization.\nIf the average CPU is above the target utilization, the autoscaler\nscales up until it reaches the maximum number of instances you\nspecified or until the average utilization reaches the target\nutilization.",
      [],
      true,
      false,
    ),
  ];
}
