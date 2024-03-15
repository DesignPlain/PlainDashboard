export interface RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer {
  // The frontend IP address of the load balancer.
  IpAddress?: string;

  // The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  IpProtocol?: string;

  // The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]
  LoadBalancerType?: string;

  // The fully qualified url of the network in which the load balancer belongs. This should be formatted like `projects/{project}/global/networks/{network}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  NetworkUrl?: string;

  // The configured port of the load balancer.
  Port?: string;

  // The ID of the project in which the load balancer belongs.
  Project?: string;

  // The region of the load balancer. Only needed for regional load balancers.
  Region?: string;
}
