import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_HealthCheckHttpsHealthCheck {
  /*
Specifies the type of proxy header to append before sending data to the
backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  ProxyHeader?: string;

  /*
The request path of the HTTPS health check request.
The default value is /.
*/
  RequestPath?: string;

  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  Response?: string;

  /*
The value of the host header in the HTTPS health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used.
*/
  Host?: string;

  /*
The TCP port number for the HTTPS health check request.
The default value is 443.
*/
  Port?: number;

  /*
Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
*/
  PortName?: string;

  /*
Specifies how port is selected for health checking, can be one of the
following values:
*/
  PortSpecification?: string;
}

export function Compute_HealthCheckHttpsHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PortSpecification",
      "Specifies how port is selected for health checking, can be one of the\nfollowing values:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProxyHeader",
      "Specifies the type of proxy header to append before sending data to the\nbackend.\nDefault value is `NONE`.\nPossible values are: `NONE`, `PROXY_V1`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RequestPath",
      "The request path of the HTTPS health check request.\nThe default value is /.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Response",
      "The bytes to match against the beginning of the response data. If left empty\n(the default value), any response will indicate health. The response data\ncan only be ASCII.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "The value of the host header in the HTTPS health check request.\nIf left empty (default value), the public IP on behalf of which this health\ncheck is performed will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The TCP port number for the HTTPS health check request.\nThe default value is 443.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PortName",
      "Port name as defined in InstanceGroup#NamedPort#name. If both port and\nport_name are defined, port takes precedence.",
      [],
      false,
      false,
    ),
  ];
}
