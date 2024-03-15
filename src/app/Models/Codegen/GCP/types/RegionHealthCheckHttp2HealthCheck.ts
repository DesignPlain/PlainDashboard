export interface RegionHealthCheckHttp2HealthCheck {
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
The port number for the health check request.
Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.
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
The request path of the HTTP health check request.
The default value is /.
*/
  RequestPath?: string;
}
