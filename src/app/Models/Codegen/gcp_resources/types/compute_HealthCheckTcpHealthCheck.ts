import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_HealthCheckTcpHealthCheck {
  /*
Specifies the type of proxy header to append before sending data to the
backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  proxyHeader?: string;

  /*
The application data to send once the TCP connection has been
established (default value is empty). If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.
*/
  request?: string;

  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  response?: string;

  /*
The TCP port number for the TCP health check request.
The default value is 443.
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
}

export function compute_HealthCheckTcpHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.String,
      "request",
      "The application data to send once the TCP connection has been\nestablished (default value is empty). If both request and response are\nempty, the connection establishment alone will indicate health. The request\ndata can only be ASCII.",
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
      InputType.Number,
      "port",
      "The TCP port number for the TCP health check request.\nThe default value is 443.",
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
  ];
}
