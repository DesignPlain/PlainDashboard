import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_getListenerDefaultActionRedirect {
  //
  host?: string;

  //
  path?: string;

  // Port of the listener. Required if `arn` is not set.
  port?: string;

  //
  protocol?: string;

  //
  query?: string;

  //
  statusCode?: string;
}

export function alb_getListenerDefaultActionRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "query", "", [], true, false),
    new DynamicUIProps(InputType.String, "statusCode", "", [], true, false),
    new DynamicUIProps(InputType.String, "host", "", [], true, false),
    new DynamicUIProps(InputType.String, "path", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "port",
      "Port of the listener. Required if `arn` is not set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
