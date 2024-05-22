import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_getTargetGroupHealthCheck {
  //
  interval?: number;

  //
  path?: string;

  //
  protocol?: string;

  //
  unhealthyThreshold?: number;

  //
  enabled?: boolean;

  //
  healthyThreshold?: number;

  //
  matcher?: string;

  //
  port?: string;

  //
  timeout?: number;
}

export function lb_getTargetGroupHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "path", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(InputType.String, "matcher", "", [], true, false),
    new DynamicUIProps(InputType.Number, "interval", "", [], true, false),
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
    new DynamicUIProps(InputType.String, "port", "", [], true, false),
    new DynamicUIProps(InputType.Number, "timeout", "", [], true, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
