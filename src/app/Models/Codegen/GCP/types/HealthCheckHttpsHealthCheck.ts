export interface HealthCheckHttpsHealthCheck {
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
}