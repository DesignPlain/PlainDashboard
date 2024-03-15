import { BackendServiceCircuitBreakersConnectTimeout } from "./BackendServiceCircuitBreakersConnectTimeout";

export interface BackendServiceCircuitBreakers {
  /*
The maximum number of pending requests to the backend cluster.
Defaults to 1024.
*/
  MaxPendingRequests?: number;

  /*
The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
*/
  MaxRequests?: number;

  /*
Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
*/
  MaxRequestsPerConnection?: number;

  /*
The maximum number of parallel retries to the backend cluster.
Defaults to 3.
*/
  MaxRetries?: number;

  /*
The timeout for new network connections to hosts.
Structure is documented below.
*/
  ConnectTimeout?: BackendServiceCircuitBreakersConnectTimeout;

  /*
The maximum number of connections to the backend cluster.
Defaults to 1024.
*/
  MaxConnections?: number;
}
