import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_TargetGroupTargetGroupHealthUnhealthyStateRouting {
  // The minimum number of targets that must be healthy. If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are `1` to the maximum number of targets. The default is `1`.
  minimumHealthyTargetsCount?: number;

  // The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are `off` or an integer from `1` to `100`. The default is `off`.
  minimumHealthyTargetsPercentage?: string;
}

export function alb_TargetGroupTargetGroupHealthUnhealthyStateRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minimumHealthyTargetsCount",
      "The minimum number of targets that must be healthy. If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are `1` to the maximum number of targets. The default is `1`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minimumHealthyTargetsPercentage",
      "The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are `off` or an integer from `1` to `100`. The default is `off`.",
      () => [],
      false,
      false,
    ),
  ];
}
