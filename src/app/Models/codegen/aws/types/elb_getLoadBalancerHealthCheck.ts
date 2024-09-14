import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elb_getLoadBalancerHealthCheck {
  //
  healthyThreshold?: number;

  //
  interval?: number;

  //
  target?: string;

  //
  timeout?: number;

  //
  unhealthyThreshold?: number;
}

export function elb_getLoadBalancerHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "interval", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "target", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "timeout", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
