import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionHealthCheckSslHealthCheck {
  /*
The TCP port number for the HTTP2 health check request.
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

  /*
Specifies the type of proxy header to append before sending data to the
backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  ProxyHeader?: string;

  /*
The application data to send once the SSL connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.
*/
  Request?: string;

  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  Response?: string;
}

export function Compute_RegionHealthCheckSslHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The TCP port number for the HTTP2 health check request.\nThe default value is 443.",
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
      "Request",
      "The application data to send once the SSL connection has been\nestablished (default value is empty). If both request and response are\nempty, the connection establishment alone will indicate health. The request\ndata can only be ASCII.",
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
  ];
}
