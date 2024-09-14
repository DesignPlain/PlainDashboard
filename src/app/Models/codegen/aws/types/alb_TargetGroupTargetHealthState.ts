import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_TargetGroupTargetHealthState {
  // Indicates whether the load balancer terminates connections to unhealthy targets. Possible values are `true` or `false`. Default: `true`.
  enableUnhealthyConnectionTermination?: boolean;

  // Indicates the time to wait for in-flight requests to complete when a target becomes unhealthy. The range is `0-360000`. This value has to be set only if `enable_unhealthy_connection_termination` is set to false. Default: `0`.
  unhealthyDrainingInterval?: number;
}

export function alb_TargetGroupTargetHealthState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableUnhealthyConnectionTermination",
      "Indicates whether the load balancer terminates connections to unhealthy targets. Possible values are `true` or `false`. Default: `true`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyDrainingInterval",
      "Indicates the time to wait for in-flight requests to complete when a target becomes unhealthy. The range is `0-360000`. This value has to be set only if `enable_unhealthy_connection_termination` is set to false. Default: `0`.",
      () => [],
      false,
      false,
    ),
  ];
}
