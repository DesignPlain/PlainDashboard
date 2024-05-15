import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getHealthCheckHttpHealthCheck {
  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  Response?: string;

  /*
The value of the host header in the HTTP health check request.
If left empty (default value), the public IP on behalf of which this health
check is performed will be used.
*/
  Host?: string;

  /*
The TCP port number for the HTTP health check request.
The default value is 80.
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

  - 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  - 'USE_NAMED_PORT': The 'portName' is used for health checking.

  - 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
*/
  PortSpecification?: string;

  /*
Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
*/
  ProxyHeader?: string;

  /*
The request path of the HTTP health check request.
The default value is /.
*/
  RequestPath?: string;
}

export function Compute_getHealthCheckHttpHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProxyHeader",
      'Specifies the type of proxy header to append before sending data to the\nbackend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RequestPath",
      "The request path of the HTTP health check request.\nThe default value is /.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Response",
      "The bytes to match against the beginning of the response data. If left empty\n(the default value), any response will indicate health. The response data\ncan only be ASCII.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Host",
      "The value of the host header in the HTTP health check request.\nIf left empty (default value), the public IP on behalf of which this health\ncheck is performed will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The TCP port number for the HTTP health check request.\nThe default value is 80.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PortName",
      "Port name as defined in InstanceGroup#NamedPort#name. If both port and\nport_name are defined, port takes precedence.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PortSpecification",
      "Specifies how port is selected for health checking, can be one of the\nfollowing values:\n\n  * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.\n\n  * 'USE_NAMED_PORT': The 'portName' is used for health checking.\n\n  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each\n  network endpoint is used for health checking. For other backends, the\n  port or named port specified in the Backend Service is used for health\n  checking.\n\nIf not specified, HTTP health check follows behavior specified in 'port' and\n'portName' fields. Possible values: [\"USE_FIXED_PORT\", \"USE_NAMED_PORT\", \"USE_SERVING_PORT\"]",
      [],
      true,
      false,
    ),
  ];
}
