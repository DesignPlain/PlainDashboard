export interface ConnectivityTestSource {
  // A Compute Engine instance URI.
  Instance?: string;

  /*
The IP address of the endpoint, which can be an external or
internal IP. An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.
*/
  IpAddress?: string;

  // A Compute Engine network URI.
  Network?: string;

  /*
Type of the network where the endpoint is located.
Possible values are: `GCP_NETWORK`, `NON_GCP_NETWORK`.
*/
  NetworkType?: string;

  /*
The IP protocol port of the endpoint. Only applicable when
protocol is TCP or UDP.
*/
  Port?: number;

  /*
Project ID where the endpoint is located. The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:
1. Only the IP address is specified, and the IP address is
within a GCP project.
2. When you are using Shared VPC and the IP address
that you provide is from the service project. In this case,
the network that the IP address resides in is defined in the
host project.
*/
  ProjectId?: string;
}
