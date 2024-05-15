import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionReadinessCheck {
  /*
A maximum time limit on application initialization, measured from moment the application successfully
replies to a healthcheck until it is ready to serve traffic. Default: "300s"
*/
  AppStartTimeout?: string;

  // Interval between health checks.  Default: "5s".
  CheckInterval?: string;

  // Number of consecutive failed checks required before removing traffic. Default: 2.
  FailureThreshold?: number;

  // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  Host?: string;

  // The request path.
  Path?: string;

  // Number of consecutive successful checks required before receiving traffic. Default: 2.
  SuccessThreshold?: number;

  // Time before the check is considered failed. Default: "4s"
  Timeout?: string;
}

export function Appengine_FlexibleAppVersionReadinessCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AppStartTimeout",
      'A maximum time limit on application initialization, measured from moment the application successfully\nreplies to a healthcheck until it is ready to serve traffic. Default: "300s"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CheckInterval",
      'Interval between health checks.  Default: "5s".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Number of consecutive failed checks required before removing traffic. Default: 2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      'Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "The request path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SuccessThreshold",
      "Number of consecutive successful checks required before receiving traffic. Default: 2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      'Time before the check is considered failed. Default: "4s"',
      [],
      false,
      false,
    ),
  ];
}
