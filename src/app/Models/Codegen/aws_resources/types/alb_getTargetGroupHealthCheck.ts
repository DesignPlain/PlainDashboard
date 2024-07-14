import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_getTargetGroupHealthCheck {
  //
  unhealthyThreshold?: number;

  //
  enabled?: boolean;

  //
  matcher?: string;

  //
  path?: string;

  //
  protocol?: string;

  //
  timeout?: number;

  //
  healthyThreshold?: number;

  //
  interval?: number;

  //
  port?: string;
}

export function alb_getTargetGroupHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "path", "", [], true, false),
    new DynamicUIProps(InputType.Number, "interval", "", [], true, false),
    new DynamicUIProps(InputType.String, "port", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "matcher", "", [], true, false),
    new DynamicUIProps(InputType.Number, "timeout", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
