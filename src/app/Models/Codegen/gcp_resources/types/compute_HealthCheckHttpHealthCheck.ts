import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_HealthCheckHttpHealthCheck {
  /*
The value of the host header in the HTTP health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used.
*/
  host?: string;

  /*
The TCP port number for the HTTP health check request.
The default value is 80.
*/
  port?: number;

  /*
Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
*/
  portName?: string;

  /*
Specifies how port is selected for health checking, can be one of the
following values:
*/
  portSpecification?: string;

  /*
Specifies the type of proxy header to append before sending data to the
backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  proxyHeader?: string;

  /*
The request path of the HTTP health check request.
The default value is /.
*/
  requestPath?: string;

  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  response?: string;
}

export function compute_HealthCheckHttpHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "requestPath",
      "The request path of the HTTP health check request.\nThe default value is /.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "response",
      "The bytes to match against the beginning of the response data. If left empty\n(the default value), any response will indicate health. The response data\ncan only be ASCII.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      "The value of the host header in the HTTP health check request.\nIf left empty (default value), the public IP on behalf of which this health\ncheck is performed will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The TCP port number for the HTTP health check request.\nThe default value is 80.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portName",
      "Port name as defined in InstanceGroup#NamedPort#name. If both port and\nport_name are defined, port takes precedence.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portSpecification",
      "Specifies how port is selected for health checking, can be one of the\nfollowing values:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "proxyHeader",
      "Specifies the type of proxy header to append before sending data to the\nbackend.\nDefault value is `NONE`.\nPossible values are: `NONE`, `PROXY_V1`.",
      [],
      false,
      false,
    ),
  ];
}
