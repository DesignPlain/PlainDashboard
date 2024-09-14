import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lb_getTargetGroupHealthCheck {
  //
  interval?: number;

  //
  timeout?: number;

  //
  unhealthyThreshold?: number;

  //
  protocol?: string;

  //
  enabled?: boolean;

  //
  healthyThreshold?: number;

  //
  matcher?: string;

  //
  path?: string;

  //
  port?: string;
}

export function lb_getTargetGroupHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "interval", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "timeout", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "matcher", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "path", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "port", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", () => [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
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
