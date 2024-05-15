import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionLivenessCheck {
  // The request path.
  Path?: string;

  // Number of consecutive successful checks required before considering the VM healthy. Default: 2.
  SuccessThreshold?: number;

  // Time before the check is considered failed. Default: "4s"
  Timeout?: string;

  // Interval between health checks.
  CheckInterval?: string;

  // Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.
  FailureThreshold?: number;

  // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  Host?: string;

  /*
The initial delay before starting to execute the checks. Default: "300s"

- - -
*/
  InitialDelay?: string;
}

export function Appengine_FlexibleAppVersionLivenessCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Timeout",
      'Time before the check is considered failed. Default: "4s"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CheckInterval",
      "Interval between health checks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.",
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
      "InitialDelay",
      'The initial delay before starting to execute the checks. Default: "300s"\n\n- - -',
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
      "Number of consecutive successful checks required before considering the VM healthy. Default: 2.",
      [],
      false,
      false,
    ),
  ];
}
