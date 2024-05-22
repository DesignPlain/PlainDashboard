import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elb_getLoadBalancerHealthCheck {
  //
  target?: string;

  //
  timeout?: number;

  //
  unhealthyThreshold?: number;

  //
  healthyThreshold?: number;

  //
  interval?: number;
}

export function elb_getLoadBalancerHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "timeout", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "interval", "", [], true, false),
    new DynamicUIProps(InputType.String, "target", "", [], true, false),
  ];
}
