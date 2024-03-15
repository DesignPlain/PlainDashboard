export interface getHealthCheckTcpHealthCheck {
  /*
The TCP port number for the TCP health check request.
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

  - 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  - 'USE_NAMED_PORT': The 'portName' is used for health checking.

  - 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
*/
  PortSpecification?: string;

  /*
Specifies the type of proxy header to append before sending data to the
backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
*/
  ProxyHeader?: string;

  /*
The application data to send once the TCP connection has been
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
