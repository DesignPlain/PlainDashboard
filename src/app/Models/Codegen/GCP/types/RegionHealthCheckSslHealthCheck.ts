export interface RegionHealthCheckSslHealthCheck {
  /*
The bytes to match against the beginning of the response data. If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.
*/
  Response?: string;

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
}
