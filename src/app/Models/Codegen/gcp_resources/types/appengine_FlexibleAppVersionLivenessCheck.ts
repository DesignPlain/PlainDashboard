import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_FlexibleAppVersionLivenessCheck {
  /*
The initial delay before starting to execute the checks. Default: "300s"

- - -
*/
  initialDelay?: string;

  // The request path.
  path?: string;

  // Number of consecutive successful checks required before considering the VM healthy. Default: 2.
  successThreshold?: number;

  // Time before the check is considered failed. Default: "4s"
  timeout?: string;

  // Interval between health checks.
  checkInterval?: string;

  // Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.
  failureThreshold?: number;

  // Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  host?: string;
}

export function appengine_FlexibleAppVersionLivenessCheck_GetTypes(): DynamicUIProps[] {
  return [
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
      "Number of consecutive successful checks required before considering the VM healthy. Default: 2.",
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
      "checkInterval",
      "Interval between health checks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.",
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
      "initialDelay",
      'The initial delay before starting to execute the checks. Default: "300s"\n\n- - -',
      [],
      false,
      false,
    ),
  ];
}
