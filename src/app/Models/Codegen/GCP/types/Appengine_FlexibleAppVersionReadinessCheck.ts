import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_FlexibleAppVersionReadinessCheck {
  // Number of consecutive successful checks required before receiving traffic. Default: 2.
  successThreshold?: number;

  // Time before the check is considered failed. Default: "4s"
  timeout?: string;

  /*
A maximum time limit on application initialization, measured from moment the application successfully
replies to a healthcheck until it is ready to serve traffic. Default: "300s"
*/
  appStartTimeout?: string;

  // Interval between health checks.  Default: "5s".
  checkInterval?: string;

  // Number of consecutive failed checks required before removing traffic. Default: 2.
  failureThreshold?: number;

  // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  host?: string;

  // The request path.
  path?: string;
}

export function appengine_FlexibleAppVersionReadinessCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "checkInterval",
      'Interval between health checks.  Default: "5s".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Number of consecutive failed checks required before removing traffic. Default: 2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      'Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The request path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "successThreshold",
      "Number of consecutive successful checks required before receiving traffic. Default: 2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeout",
      'Time before the check is considered failed. Default: "4s"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appStartTimeout",
      'A maximum time limit on application initialization, measured from moment the application successfully\nreplies to a healthcheck until it is ready to serve traffic. Default: "300s"',
      [],
      false,
      false,
    ),
  ];
}
